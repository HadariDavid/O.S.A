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

            const tanar = await TanaradatlapModel.findOne({where:{osztalyId: diak.osztalyId}});
            const jegyek = await OsztalyzatModel.findAll({where:{tanuloId: id}});
            
            
///////////////////////////felhasználó órarendjének lekérése
            oraModel.findAll({
                where:{
                    azonosito:"2/14c"
                }
            }).then((orarend)=>{

        /////////////////////////////"mai" órarend            
                   
                    
                    maiOrarend = orarend[(date.getDay()-1)];
            //s     console.log(maiOrarend);

                    if(date.getDay() == 0 && date.getDay() == 6){
                    maiOrarend = "mai nap nincs tanítási óra";
                    }

        //////////////////////////////////////////////            
            }).catch((err)=>{
                console.log(err);
                return res.status(502).json({
                    error:true,
                    message:"adatbázis hiba"
                });
            });
            
            
///////////////////////////////////////////////////////////////////////

////////////////////átlag kiszámítása
            let atlag = 0;
            jegyek.forEach(jegy => {
                atlag += jegy.osztalyzat;
            });
            atlag = atlag/jegyek.length;
            
////////////////////////////////////////////////

console.log(maiOrarend);//probléma undefined-nak érzékeli de ha feljebb használnám (47. sor) ott érzékelné

            console.log(date.getHours() + " : " + date.getMinutes());

            CsengetesiRendModel.findAll().then((orak)=> {

                orak.forEach((element) => {
                    let beÓ = element.becsengo.split(":")[0];
                    let beP = element.becsengo.split(":")[1];
                    let kiÓ = element.kicsengo.split(":")[0];
                    let kiP = element.kicsengo.split(":")[1];
                
                    if( beÓ <= date.getHours() < kiÓ){
                       if(beP <= date.getMinutes() < kiP){

                       }
                    }else{
                        console.log(beÓ);
                    }
                    })
                }).catch((err) => {
                    console.log(err);
                    return res.status(502).json({
                        error:true,
                        message:"adatbázis hiba"
                    })
                }) 


                return res.status(200).json({
                error:false,
                message:"sikeres adatlekérés",
                data:{
                    nev: diak.csaladNev + " " + diak.keresztNev,
                    szak: diak.Kepzes,
                    osztaly: diak.osztalyId,
                    osztalyFo: tanar.csaladNev + " " + tanar.keresztNev,
                    osztalyFoTel: tanar.telefon,
                    jegyek:[jegyek],
                    atlag: atlag,
                    napiOrarend: maiOrarend
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
