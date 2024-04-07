//könyvtárak
const sequelize = require("../db");
const { QueryTypes } = require("sequelize");
const jwt = require('jsonwebtoken');
const fs = require("node:fs/promises");
const { Op } = require("sequelize");



////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const OsztalyzatModel = require("../dbModels/osztalyzat.model");
const oraModel = require ("../dbModels/ora.model");
const CsengetesiRendModel = require("../dbModels/csengetesiRend.model");

///////////////////////////////////////////////////


async function getDiak(req, res){

const date = new Date(Date.now());
var maiOrarend;
const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);


    DiakadatlapModel.findOne({where:{ id: id}}).then(async (diak)=> {
        if(diak == null){
            return res.status(404).json({
               succes:false,
                message:"nincs ilyen felhasználó"
            });
        }else{

            //megvárjuk a szükséges adatok lekérdezését az adatbázisból
            Promise.all([
            tanar = await TanaradatlapModel.findOne({where:{osztalyFoId: diak.osztalyId}}),
            jegyek = await OsztalyzatModel.findAll({where:{tanuloId: id}}),
            orarend = await oraModel.findAll({where:{azonosito:diak.osztalyId}}),
            orak = await CsengetesiRendModel.findAll(),
            ]).then(() => {
                    ///////////////////////////felhasználó órarendjének lekérése
                    

                    if(date.getDay() == 0 || date.getDay() == 6){
                        maiOrarend = "mai nap nincs tanítási óra";
                    }else{
                        maiOrarend = orarend[date.toLocaleString('hu-HU', {  weekday: 'long' })];
                    }
    
                    ///////////////jelenlegi és következő óra

                    //console.log(date.getHours() + " : " + date.getMinutes());

                    var oraJ;
                    var oraK;
                      
                    for(let i = 0; i < orak.length; i++){
                    let beÓ = parseInt(orak[(i)].becsengo.split(":")[0]); //becsengetés órája
                    let beP = parseInt(orak[(i)].becsengo.split(":")[1]);   //becsengetés perce
                    let kiÓ = parseInt(orak[(i)].kicsengo.split(":")[0]);   //kicsengetés órája
                    let kiP = parseInt(orak[(i)].kicsengo.split(":")[1]);

                    if( (beÓ <= date.getHours()) && (beP <= date.getMinutes())){

                                   oraX = `ora${(i+1)}`;
                                   oraJ = maiOrarend[oraX];
                                   oraX = `ora${(i+2)}`;
                                    oraK = maiOrarend[oraX];
                                    
                    }
                    
                    }

                    ///////////////////////////////////////////////////////////////////////

                    ////////////////////átlag kiszámítása
                        let atlag = 0;
                        jegyek.forEach(jegy => {
                            atlag += jegy.osztalyzat;
                        });
                        atlag = atlag/jegyek.length;
                        
                    ///////////////////////////////////////

                    return res.status(200).json({
                       succes:true,
                        message:"sikeres adatlekérés",
                        data:{
                            nev: diak.csaladNev + " " + diak.keresztNev,
                            szak: diak.Kepzes,
                            osztaly: diak.osztalyId,
                            osztalyFo: tanar.csaladNev + " " + tanar.keresztNev,
                            osztalyFoTel: tanar.telefon,
                            osztalyFoEmail: tanar.email,
                            jegyek:jegyek, //array
                            atlag: atlag,
                            napiOrarend: maiOrarend, //object
                            aktualisOra:{
                                jelenOra: oraJ,
                                kovOra: oraK
                            }
                        }
                    })


            }).catch((err) => {
                console.log(err);
                return res.status(502).json({
                   succes:false,
                    message:"adatbázis hiba"
                })
            })
            
              
        }
    }).catch((err) =>{
        console.log(err);
        return res.status(502).json({
           succes:false,
            message:"adatbázis hiba"
        })
    });

}

function getAllDiakAdat(req, res){
    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);
    DiakadatlapModel.findOne({where:{ id: id}}).then(async (diak)=> {
        if(diak == null){
            return res.status(404).json({
               succes:false,
                message:"nincs ilyen felhasználó"
            });

        }else{

            return res.status(200).json({
                succes:true,
                message:"sikeres lekérdezés",
                data:diak
            })

        }
    }).catch((err)=>{
        console.log(err);
        return res.status(502).json({
           succes:false,
            message:"adatbázis hiba"
        })
    });

}

async function getOrarend(req,res){
    
    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);
    DiakadatlapModel.findOne({where:{id:id}}).then((diak)=>{
        
        if(diak == null){
                TanaradatlapModel.findOne({where:{id:id}}).then((tanar)=> {
                        oraModel.findAll({where:{azonosito:tanar.id}}).then((orarend) =>{

                    return res.status(200).json({
                        succes:true,
                        message:"sikeres lekérés",
                        data: orarend
                    });

                    }).catch((err)=>{
                        console.log(err);
                        return res.status(502).json({
                            succes:false,
                            message:"adatbázis hiba"
                        })
                    })
                })
        }else{
                oraModel.findAll({where:{azonosito:diak.osztalyId}}).then((orarend) =>{

                return res.status(200).json({
                    succes:true,
                    message:"sikeres lekérés",
                    data: orarend
                });

            }).catch((err)=>{
                console.log(err);
                return res.status(502).json({
                    succes:false,
                    message:"adatbázis hiba"
                })
            })
        }
    }).catch((err)=>{
            console.log(err);
            return res.status(502).json({
                succes:false,
                message:"adatbázis hiba"
            })
        })
   
   

}

//////////////////////////////////////////////////////////////////////////////////



async function getTanar(req, res){
    const date = new Date(Date.now());
    var maiOrarend;
    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);


    TanaradatlapModel.findOne({where:{ id : id}}).then( async (tanar)=> {
        if(tanar == null){
            return res.status(404).json({
               succes:false,
                message:"nincs ilyen felhasználó"
            });
        }else{


            //megvárjuk a szükséges adatok lekérdezését az adatbázisból
            Promise.all([
               
                orarend = await oraModel.findAll({where:{azonosito:"NáM"/*tanar.id*/}}),
                orak = await CsengetesiRendModel.findAll(),
                ]).then(() => {
                        ///////////////////////////felhasználó órarendjének lekérése

                        if(date.getDay() == 0 || date.getDay() == 6){
                            maiOrarend = "mai nap nincs tanítási óra";
                        }else{
                            maiOrarend = orarend[date.toLocaleString('hu-HU', {  weekday: 'long' })];
                        }
        
                        console.log(maiOrarend);
                        
                        var oraJ;
                        var oraK;
                          
                        for(let i = 0; i < orak.length; i++){
                        let beÓ = parseInt(orak[(i)].becsengo.split(":")[0]); //becsengetés órája
                        let beP = parseInt(orak[(i)].becsengo.split(":")[1]);   //becsengetés perce
                        let kiÓ = parseInt(orak[(i)].kicsengo.split(":")[0]);   //kicsengetés órája
                        let kiP = parseInt(orak[(i)].kicsengo.split(":")[1]);
    
                        if( (beÓ <= date.getHours()) && (beP <= date.getMinutes())){
                                       oraX = `ora${(i+1)}`;
                                       oraJ = maiOrarend[oraX];
                                       oraX = `ora${(i+2)}`;
                                        oraK = maiOrarend[oraX];
                                        
                            }
                        
                        }
                    
                        ///////////////////////////////////////////////////////////////////////

    

                        return res.status(200).json({
                           succes:true,
                            message:"sikeres adatlekérés",
                            data:{
                                nev: tanar.csaladNev + " " + tanar.keresztNev,
                                osztaly: tanar.osztalyFoId,
                                osztalyok: tanar.osztalyok,
                                napiOrarend: maiOrarend, //object
                                aktualisOra:{
                                    jelenOra: oraJ,
                                    kovOra: oraK
                                }
                            }
                        })
    
    
                }).catch((err) => {
                    console.log(err);
                    return res.status(502).json({
                       succes:false,
                        message:"adatbázis hiba"
                    })
                })
                
            
        }
    }).catch((err) =>{
        console.log(err);
        return res.status(502).json({
           succes:false,
            message:"adatbázis hiba"
        })
    });
    
}

function getAllTanarAdat(req, res){
    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);
    TanaradatlapModel.findOne({where:{ id: id}}).then(async (tanar)=> {
        if(tanar == null){
            return res.status(404).json({
               succes:false,
                message:"nincs ilyen felhasználó"
            });

        }else{

            return res.status(200).json({
                succes:true,
                message:"sikeres lekérdezés",
                data:tanar
            })

        }
    }).catch((err)=>{
        console.log(err);
        return res.status(502).json({
           succes:false,
            message:"adatbázis hiba"
        })
    });

}

function tanarGetOsztalyok(req, res){

    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);
    TanaradatlapModel.findOne({where:{ id: id}}).then(async (tanar)=> {
        DiakadatlapModel.findAll({where:{osztalyId:tanar.osztalyok.split(",") }}).then((osztalyok)=>{
            return res.status(200).json({
                succes:true,
                message:"sikeres lekérés",
                data:osztalyok
            })
        }).catch((err)=>{
            console.log(err)
            return res.status(500).json({
                succes:false,
                message:"adatbázis hiba"
            })
        })

    }).catch((err)=>{
        console.log(err)
        return res.status(500).json({
            succes:false,
            message:"adatbázis hiba"
        })
    });

 
}


module.exports = {getDiak,getAllDiakAdat, getOrarend, tanarGetOsztalyok, getTanar,getAllTanarAdat};
