//könyvtárak
const sequelize = require("../db");
const { QueryTypes } = require("sequelize");
const jwt = require('jsonwebtoken');
const fs = require("node:fs/promises");


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
                error:true,
                message:"nincs ilyen felhasználó"
            });
        }else{

            //megvárjuk a szükséges adatok lekérdezését az adatbázisból
            Promise.all([
            tanar = await TanaradatlapModel.findOne({where:{osztalyId: diak.osztalyId}}),
            jegyek = await OsztalyzatModel.findAll({where:{tanuloId: id}}),
            orarend = await oraModel.findAll({where:{azonosito:/*diak.osztalyId*/"2/14c"}}),
            orak = await CsengetesiRendModel.findAll(),
            ]).then(() => {
                    ///////////////////////////felhasználó órarendjének lekérése
                        
                    maiOrarend = orarend[(date.getDay()-1)];

                    if(date.getDay() == 0 && date.getDay() == 6){
                    maiOrarend = "mai nap nincs tanítási óra";
                    }


                    ///////////////jelenlegi és következő óra

                    console.log(date.getHours() + " : " + date.getMinutes());

                    var oraJ;
                    var oraK;

                    for(let element in orak){
                    let beÓ = orak[element].becsengo.split(":")[0]; //becsengetés órája
                    let beP = orak[element].becsengo.split(":")[1];   //becsengetés perce
                    let kiÓ = orak[element].kicsengo.split(":")[0];   //kicsengetés órája

                    if( beÓ <= date.getHours() && date.getHours() < kiÓ){
                    if(beP <= date.getMinutes()){
                            var oraX = `ora${orak[element].id}`;
                            console.log(oraX);
                            oraJ = orarend["ora1"];
                            console.log(orarend.ora1);
                            oraX = `ora${(orak[element].id + 1)}`;
                            oraK = orarend[oraX];
                            console.log(oraK);
                            
                    }else{
                            console.log("szünet");
                    }
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
                        error:false,
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
                    error:true,
                    message:"adatbázis hiba"
                })
            })
            
              
        }
    }).catch((err) =>{
        console.log(err);
        return res.status(502).json({
            error:true,
            message:"adatbázis hiba"
        })
    });

}


//////////////////////////////////////////////////////////////////////////////////



function getTanar(req, res){

    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);


    TanaradatlapModel.findOne({where:{ id : id}}).then((tanar)=> {
        if(tanar == null){
            return res.status(404).json({
                error:true,
                message:"nincs ilyen felhasználó"
            });
        }else{
            return res.status(200).json({
                error:false,
                message:"sikeres adatlekérés",
                data:{
                    nev: tanar.csaladNev + " " + tanar.keresztNev
                }
            })
        }
    }).catch((err) =>{
        console.log(err);
        return res.status(502).json({
            error:true,
            message:"adatbázis hiba"
        })
    });
    
}






module.exports = {getDiak, getTanar};
