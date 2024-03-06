//könyvtárak
const sequelize = require("../db");

////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const { QueryTypes } = require("sequelize");

///////////////////////////////////////////////////

var szerkFelhasznalo;
let setModel;

async function getUser(req, res){

   TanaradatlapModel.findOne({
        where:{
            id: req.body.id
        }
    }).then(async (tanar) => {
        if ( tanar === null){
        DiakadatlapModel.findOne({
                where:{
                    id: req.body.id
                }
            }).then((diak) => { 
                    if(diak === null){
                        return res.status(404).json({
                            status: "error",
                            message:"nem találtunk ilyen felhasználót"
                        }); 
                    }else{
                        
                        szerkFelhasznalo = diak;
                        setModel = "diakadatlap";
                        res.status(200).json({
                        status:"succes",
                        message:"lekérés sikeres",
                        felhasznalo: diak
                        });
                    }
                })
        }else{

            szerkFelhasznalo = tanar;
            setModel = "tanaradatlap";
            res.status(200).json({
            status:"succes",
            message:"lekérés sikeres",
            felhasznalo: tanar
            });
        }
    });
}

async function patchUser(req,res){

    let setThis = Object.keys(req.body);
    let setData = Object.values(req.body);
    
    try{
        for(let i = 0; i< setThis.length; i++){
        sequelize.query("UPDATE :model SET :param = :data WHERE id = :userid",{
            replacements:{
                model: setModel,
                param: setThis[i],
                data: setData[i],
                userid: parseInt(szerkFelhasznalo.id)
            },
            type:QueryTypes.UPDATE
        });
        }
    }catch(error){
        console.log(error);
    }


    szerkFelhasznalo.save().then(() => {
        return res.status(200).json({
            status:"succes", 
            message: "sikeres frissités"
        })
   });

  
 
    

}



module.exports = {getUser, patchUser};