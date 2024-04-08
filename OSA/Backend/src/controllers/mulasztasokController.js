//könyvtárak
const sequelize = require("../db");
const { QueryTypes, where } = require("sequelize");
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");


////////////////////////////////////////

//modellek
const HianyzasokModel = require("../dbModels/hianyzasok.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");

///////////////////////////////////////////////////

function igazolas(req, res){

    if(req.body.azonosito == null || req.body.azonosito == undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs azonosító"
        })
    }
/*
    if(req.body.datum == null || req.body.datum == undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs dátum megadva"
        })
    }
*/
    if(req.body.igazolas == null || req.body.igazolas == undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs igazolas indoklás"
        })
    }

    HianyzasokModel.findOne({
        where:{
            //datuma: req.body.datum,
            azonosito: req.body.azonosito
        }
    }).then((igazolando)=>{
        if(igazolando == null){
            return res.status(404).json({
                succes:false,
                message:"nincs ilyen hianyzas"
            })
        }
        igazolando.set({
            igazoltOrak: req.body.orakIgazolva,
            igazolva:req.body.igazolas
        });
            igazolando.save().then(()=>{
                return res.status(200).json({
                    succes:true,
                    message:"hiányzás igazolva"
                })
            })
        
    }).catch((err)=>{
        console.log(err);
        return res.status(520).json({
            succes:false,
            message:"adatbázis hiba"
        })
    })

    

}


/////////////////////////////////////////hiányzás létrehozása, feltöltése, rögzítése /////////////////
function hianyzaIras(req, res/*datum, azonosito, igazolva*/){
    const date = new Date(Date.now());

    DiakadatlapModel.findOne({where:{id:req.body.azonosito}}).then((diak)=>{
        if(diak == null){
            return res.status(400).json({
                succes:false,
                message:"rossz azonosító"
            })
        }else{

    if(req.body.azonosito == null || req.body.azonosito == undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs azonosito"
        })
    }


    if(req.body.igazolva == null || req.body.igazolva == undefined){
        igazolasTipus = "igazolatlan";
    }else{
        igazolasTipus = req.body.igazolva;
    }

    HianyzasokModel.findOne({
        where:{
        [Op.or]:[
            {azonosito:req.body.azonosito},
            {datuma: date}
        ]}
    }).then(async (existingHianyzas)=>{

        if(existingHianyzas == null){
           const hianyzas = HianyzasokModel.build({
            datuma:date,
            orakSzama:1,
            azonosito: req.body.azonosito,
            igazolva: igazolasTipus
            });

                hianyzas.save().then(()=>{
                    return res.status(200).json({
                        succes:true,
                        message:"hiányzás rögzítve"
                    })
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
                    return res.status(200).json({
                        succes:true,
                        message:"hiányzás rögzítve"
                    })
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
}
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////hiányzások lekérése dátum vagy diák azonosító alapján
function hianyzasokTanarOldalLeker(req, res){



    if(req.body.azonosito == null || req.body.azonosito == undefined){
        return res.status(400).json({
            succes:false,
            message:"nincs azonosító"
        })
    }


    HianyzasokModel.findAll({ 
        where:{
                 azonosito: azonosito 
            
        }
    }).then((hianyzasok)=>{
        if(hianyzasok == null){
            return res.status(404).json({
                succes:false,
                message:"nincs ilyen adat"
            })
        }

        return res.status(200).json({
            succes:true,
            message:"sikeres lekérés",
            data:hianyzasok
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(520).json({
            succes:false,
            message:"adatbázis hiba"
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////

function hianyzasokDiakOldal(req,res){
    const {id} = jwt.decode(req.headers.authorization.split(' ')[1]);
    HianyzasokModel.findAll({where:{azonosito: id}}).then((hianyzasok)=> {

        return res.status(200).json({
            succes:true,
            message:"sikeres lekérés",
            data:hianyzasok
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({
            succes:false,
            message:"adatbázis hiba"
        })
    })
}

module.exports={hianyzasokTanarOldalLeker,hianyzasokDiakOldal, hianyzaIras, igazolas};