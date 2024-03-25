//könyvtárak
const sequelize = require("../db");

////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const { QueryTypes } = require("sequelize");

///////////////////////////////////////////////////

async function getDiak(req, res){

DiakadatlapModel.findOne({where:{ id : req.id}}).then((diak)=> {
    if(diak == null){
        return res.status(404).json({
            error:true,
            message:"nincs ilyen felhasználó"
        });
    }else{
        return res.status(200).json({
            error:false,
            message:"sikeres adatlekérés",
            data:{
                nev: diak.csaladNev + " " + diak.keresztNev
            }
        })
    }
})

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
