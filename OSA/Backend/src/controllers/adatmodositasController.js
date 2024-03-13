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
    
    try{
        TanaradatlapModel.findOne({
            where:{
                id: req.body.id
            }
        }).then(async (tanar) => {
                tanar.set({
                    id:(req.body.csaladNev.substring(0,2) + req.body.keresztNev[0]),
                    osztalyId:req.body.osztalyId,
                    csaladNev:req.body.csaladNev,
                    keresztNev: req.body.keresztNev,
                    szuletesiHely: req.body.szuletesiHely,
                    szuletesiDatum:req.body.szuletesiDatum,
                    szuletesiOrszag:req.body.szuletesiOrszag,
                    allampolgarsag:req.body.allampolgarsag,
                    anyanyelv:req.body.anyanyelv,
                    telefon:req.body.telefon,
                    email:req.body.email,
                    anyjaleanyneve:req.body.anyjaleanyneve,
                    lakcim:req.body.lakcim,
                    taj:req.body.taj,
                    adoSzam:req.body.adoSzam,
                    bankszámlaszám:req.body.bankszámlaszám,
                    oktatasiAzonosito:req.body.oktatasiAzonosito,
                    iskolaAzonosito:req.body.iskolaAzonosito,
                    oraId:req.body.oraId,
                    szerep:req.body.szerep,
                    jogviszonyKezdete:req.body.jogviszonyKezdete,
                    jogviszonyVartVege:req.body.jogviszonyVartVege,
                    jogviszony:req.body.jogviszony,
                    szakok: req.body.szakok,
                })

                    tanar.save().then(()=>{
                            return res.status(200).json({
                                status:"succes", 
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
                        diak.set({
                            id:req.body.id, //OM azonosító
                            osztalyId:req.body.osztalyId, //besoroló function helye,
                            csaladNev:req.body.csaladNev,
                            keresztNev: req.body.keresztNev,
                            szuletesiHely: req.body.szuletesiHely,
                            szuletesiDatum:req.body.szuletesiDatum,
                            szuletesiOrszag:req.body.szuletesiOrszag,
                            allampolgarsag:req.body.allampolgarsag,
                            anyanyelv:req.body.anyanyelv,
                            telefon:req.body.telefon,
                            email:req.body.email,
                            anyjaleanyneve:req.body.anyjaleanyneve,
                            gondviseloNeve:req.body.gondviseloNeve,
                            gondviseloTelefon:req.body.gondviseloTelefon,
                            gondviseloEmail:req.body.gondviseloEmail,
                            lakcim:req.body.lakcim,
                            taj:req.body.taj,
                            adoSzam:req.body.adoSzam,
                            bankszámlaszám:req.body.bankszámlaszám,
                            iskolaAzonosito:req.body.iskolaAzonosito,
                            oraId:req.body.oraId,
                            szerep:req.body.szerep,
                            jogviszonyKezdete:req.body.jogviszonyKezdete,
                            jogviszonyVartVege:req.body.jogviszonyVartVege,
                            jogviszony:req.body.jogviszony,
                            hatranyosHelyzet:req.body.hatranyosHelyzet,
                            kepesitesek:req.body.kepesitesek,
                            egyediMegjegyzes: req.body.egyediMegjegyzes,
                            
                        })
                            diak.save().then(()=>{
                                return res.status(200).json({
                                    status:"succes", 
                                    message: "sikeres frissités"
                                });
                            })
                    });
                    
            } else{
                res.status(404).json({
                    status:"succes",
                    message:"Nincs ilyen felhasználó"
                })
            }
        }catch(error){
            console.log(error);
            return res.status(520).json({
                status:"error",
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
                        res.status(200).json({
                            status:"succes",
                            message:"sikeres törlés"
                        })
                });
            }else{
                 diak.destroy();
                 res.status(200).json({
                    status:"succes",
                    message:"sikeres törlés"
                })
            }
        })
    }catch(error){
        console.log(error);
    }   
}




module.exports = {getUser, patchUser, deleteUser};
