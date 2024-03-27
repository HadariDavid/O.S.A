//könyvtárak
const sequelize = require("../db");

////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const { QueryTypes } = require("sequelize");

///////////////////////////////////////////////////

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
                            error: true,
                            message:"nem találtunk ilyen felhasználót"
                        }); 
                    }else{
                        res.status(200).json({
                        error:false,
                        message:"lekérés sikeres",
                        data: diak
                        });
                    }
                })
        }else{

            res.status(200).json({
            error:true,
            message:"lekérés sikeres",
            data: tanar
            });
        }
    });
}

async function patchUser(req,res){
    
    try{
        TanaradatlapModel.findOne({
            where:{
                id: req.body.id
            }
        }).then(async (tanar) => {

            for(const elem of Object.keys(req.body)){
                tanar[elem] = req.body[elem];
            }
                    tanar.save().then(()=>{
                            return res.status(200).json({
                                error:false, 
                                message: "sikeres frissités"
                            });
                        })
                })

            if ( tanar === null){
                DiakadatlapModel.findOne({
                        where:{
                            id: req.body.id
                        }
                    }).then((diak) => {
                       
                        for(const elem of Object.keys(req.body)){
                            diak[elem] = req.body[elem];
                        }

                            diak.save().then(()=>{
                                return res.status(200).json({
                                    error:false, 
                                    message: "sikeres frissités"
                                });
                            })
                    });
                    
            } else{
                return res.status(404).json({
                    error:true,
                    message:"Nincs ilyen felhasználó"
                })
            }
    }catch(error){
        console.log(error);
        return res.status(520).json({
            error:true,
            message:"váratlan hiba",
            cause:error
        })
    }
}

function deleteUser(req,res){
    try{
        DiakadatlapModel.findOne({
            where:{
                id:req.body.id
            }
        }).then((diak) => {
                if(diak === null){
                    TanaradatlapModel.findOne({
                        where:{
                            id:req.body.id
                        }
                    }).then((tanar) => {
                        tanar.destroy();
                        return res.status(200).json({
                            status:"succes",
                            message:"sikeres törlés"
                          
                        })
                });
            }else{
                 diak.destroy();
                 return res.status(200).json({
                    status:"succes",
                    message:"sikeres törlés"
                })
            }
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            error:true,
            message:"adatbázis hiba"
        })
    }   
}




module.exports = {getUser, patchUser, deleteUser};
