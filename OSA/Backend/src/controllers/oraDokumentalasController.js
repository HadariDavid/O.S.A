//könyvtárak
const sequelize = require("../db");
const { QueryTypes, where } = require("sequelize");
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
const dokumentaltOrakModel = require("../dbModels/dokumentaltOrak.model");
const HianyzasokModel = require("../dbModels/hianyzasok.model");

///////////////////////////////////////////////////

function oraDokumentalas(req,res){ 
    var oraBool = false;
    var jegyBool = false;
    var hianyzasBool = false;

    const date = new Date(Date.now());
    const {id} = jwt.decode(req.headers.authorization.split(" ")[1]);
    if(req.body.tantargy== null || req.body.tantargy== undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs tantárgy megadva"
        })
    }
    if(req.body.osztaly== null || req.body.osztaly== undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs osztaly megadva"
        })
    }

    TanaradatlapModel.findOne({where:
        {
        id:id,
        szakok:{[Op.like]: `${req.body.tantargy}`},
        osztalyok:{[Op.like]:`%${req.body.osztaly}%`}
        }
    }).then((tanar)=>{
        if(tanar == null){
            return res.status(401).json({
                succes:false,
                message:"Nem tanítja a megadott osztályt vagy tantárgyat"
            })
        }

        //ora alap dokumentálása
        dokumentaltOrakModel.max("oraSzama", { where: { tantargy: req.body.tantargy}}).then((maxOra)=>{
            if((maxOra== null)){
                max = 1;
            }else{
                console.log(maxOra);
            max = maxOra + 1;
            }

            

            const dokOra = dokumentaltOrakModel.build({
                osztaly: req.body.osztaly,
                tantargy:req.body.tantargy,
                tanar: tanar.id,
                oraSzama: max,
                datum: date 
            })
            dokOra.save().then(()=>{
                oraBool = true;
                console.log("óra sikeresen dokumentálva");

            }).catch((err)=>{
                console.log(err)
                return res.status(500).json({
                    succes:false,
                    message:"szerver hiba"
                });
            });
        }).catch((err)=>{
            console.log(err)
            return res.status(500).json({
                succes:false,
                message:"szerver hiba"
            })
        })
        //////////////////////////////////////////////////////////////////////////////////////////
        
        //hiányzók
            if(req.body.hianyzok == undefined || req.body.hianyzok == null){
                hianyzasBool = true;
                console.log("nincs hianyzó");
            }else{
                req.body.hianyzok.forEach(hianyzok => {
                    DiakadatlapModel.findOne({where:{id:hianyzok.id}}).then((diak)=>{
                        if(diak == null){
                            return res.status(400).json({
                                succes:false,
                                message:"rossz azonosító"
                            })
                        }else{
                
                    if(hianyzok.id == null || hianyzok.id == undefined){
                        return res.status(400).json({
                            succes:false,
                            message:"nincs azonosito"
                        })
                    }
                
                
                    if(hianyzok.igazolas == null || hianyzok.igazolas == undefined){
                        igazolasTipus = "igazolatlan";
                    }else{
                        igazolasTipus = hianyzok.igazolas;
                    }
                
                    HianyzasokModel.findOne({
                        where:{
                        [Op.or]:[
                            {azonosito:hianyzok.id},
                            {datuma: date}
                        ]}
                    }).then(async (existingHianyzas)=>{
                
                        if(existingHianyzas == null){
                           const hianyzas = HianyzasokModel.build({
                            datuma:date,
                            orakSzama:1,
                            azonosito: hianyzok.id,
                            igazolva: igazolasTipus
                            });
                
                                hianyzas.save().then(()=>{
                                    hianyzasBool = true
                                    console.log("hianyzas rögzitve");
                                }).catch((err)=>{
                                    console.log(err)
                                    return res.status(520).json({
                                        succes:false,
                                        message:"adatbázis hiba"
                                    })
                                });
                
                            
                        }else{
                            existingHianyzas.set({
                                orakSzama: existingHianyzas.orakSzama + 1
                            })
                            existingHianyzas.save().then(()=>{
                                hianyzasBool = true;
                                    console.log("hianyzas rögzítve");
                                }).catch((err)=>{
                                    console.log(err)
                                    return res.status(520).json({
                                        succes:false,
                                        message:"adatbázis hiba"
                                    })
                                });
                            
                
                        }
                
                        }).catch((err)=>{
                            return console.log(err);
                        })
                        }
                    }).catch((err)=>{
                        return console.log(err);
                    })
                });
                
            }
            

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        //jegyek
        if((req.body.jegyek == undefined) || (req.body.jegyek == null)){
            jegyBool = true;
            console.log("nem adtunk jegyet");
        }else{
            req.body.jegyek.forEach((osztalyozas)=>{
            
                if((0 >= osztalyozas.jegy) || (osztalyozas.jegy >= 6)){
                    return res.status(400).json({
                        succes:false,
                        message:"nem érvényes érdemjegy"
                    })
                }
    
                const osztalyzat = OsztalyzatModel.build({
                    tanuloID:osztalyozas.id,
                    tantargyID:req.body.tantargy,
                    osztalyzat:osztalyozas.jegy,
                    datum: date,
                    oka:osztalyozas.ok,
                    tanar: id
                })
    
                osztalyzat.save().then(()=>{
                    jegyBool = true;
                    console.log("sikeres értékelés")
                }).catch((err)=>{
                    console.log(err);
                    return res.status(500).json({
                        succes:false,
                        message:"adatbázis hiba"
                    })
                })
    
            });
        }
            
       
        
        /////////////////////////////

    }).catch((err)=>{
        console.log(err)
        return res.status(500).json({
            succes:false,
            message:"szerver hiba"
        })
    })

    return res.status(200).json({
        succes:true,
        message:"óra sikeresen dokumentálva"
    })

}

module.exports ={oraDokumentalas}
