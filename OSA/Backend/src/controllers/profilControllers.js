//könyvtárak
const sequelize = require("../db");
const { QueryTypes } = require("sequelize");

////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const OsztalyzatModel = require("../dbModels/osztalyzat.model");

///////////////////////////////////////////////////

async function getDiak(req, res){
const {id} = jwt.decode(token);


    DiakadatlapModel.findOne({where:{ id: id}}).then(async (diak)=> {
        if(diak == null){
            return res.status(404).json({
                error:true,
                message:"nincs ilyen felhasználó"
            });
        }else{

            const tanar = await TanaradatlapModel.findOne({where:{osztalyId: diak.osztalyId}});
            const jegyek = await OsztalyzatModel.findAll({where:{tanuloID: id}});

            let atlag = 0;
            jegyek.forEach(jegy => {
                atlag += jegy.osztalyzat;
            });
            atlag = atlag/jegyek.length;
            
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
                    atlag: atlag

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


function getTanar(req, res){
    TanaradatlapModel.findOne({where:{ id : req.id}}).then((tanar)=> {
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
    })
    
}






module.exports = {getDiak, getTanar};
