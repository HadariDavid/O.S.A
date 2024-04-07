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

///////////////////////////////////////////////////

function jegyAdas(req, res){
    const date = new Date(Date.now());
    var {nev}=jwt.decode(req.headers.authorization.split(' ')[1]);

    if((0 >= req.body.osztalyzat) || (req.body.osztalyzat >= 6)){
        return res.status(400).json({
            succes:false,
            message:"nem érvényes érdemjegy"
        })
    }

    const osztalyzat = OsztalyzatModel.build({
        tanuloID:req.body.tanuloId,
        tantargyID:req.body.tantargyId,
        osztalyzat:req.body.osztalyzat,
        datum: date,
        oka:req.body.oka,
        tanar: nev
    })

    osztalyzat.save().then(()=>{
        return res.status(200).json({
            succes:true,
            message:"sikeres osztályozás"
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({
            succes:false,
            message:"adatbázis hiba"
        })
    })

}

function leKeres(req, res){

    if(req.body.tantargyId == null || req.body.tantargyId == undefined){
        tantargyId = "-"
    }else{
        tantargyId = req.body.tantargyId
    }

    if(req.body.tanuloId == null || req.body.tanuloId == undefined){
        tanuloId = "-"
    }else{
        tanuloId = req.body.tanuloId
    }

    OsztalyzatModel.findAll({where:
        {
            [Op.or]:[
                {tanuloID: tanuloId},
                {tantargyID: tantargyId},
            ]
        }
    }).then((osztalyzatok)=>{
            return res.status(200).json({
                succes:true,
                message:"sikeres lekérés",
                date:osztalyzatok
            })
    })
    

}

function atlag(req, res){
    var atlag = 0;

    if(req.body.tantargyId == null || req.body.tantargyId == undefined){
        tantargyId = "-"
    }else{
        tantargyId = req.body.tantargyId;
        message = "átlag tantárgy jegyei alapján"
    }

    if(req.body.tanuloId == null || req.body.tanuloId == undefined){
        tanuloId = "-"
    }else{
        tanuloId = req.body.tanuloId
        message ="átlag tanuló összes jegye alapján"
    }

    if(req.body.tanuloId != undefined && req.body.tanuloId != undefined){
        OsztalyzatModel.findAll({where:
            {
                tanuloID: tanuloId,
                tantargyID: tantargyId
            }
        }).then((osztalyzatok)=>{
    
                osztalyzatok.forEach((elem)=>{
                    atlag = atlag + elem.osztalyzat;
                })
                    return res.status(200).json({
                    succes:true,
                    message: "átlag a tanuló megadott tantárgyából",
                    data: (atlag/osztalyzatok.length)
                    })    
        }).catch((err)=>{
            console.log(err);
            return res.status(500).json({
                succes:false,
                message:"átlagot nem tudtuk kiszámítani szerver hiba miatt"
            })
        })
    }else{
        OsztalyzatModel.findAll({where:
            {
                [Op.or]:[
                    {tanuloID: tanuloId},
                    {tantargyID: tantargyId},
                ]
            }
        }).then((osztalyzatok)=>{
    
                osztalyzatok.forEach((elem)=>{
                    atlag = atlag + elem.osztalyzat;
                })
                    return res.status(200).json({
                    succes:true,
                    message: message,
                    data: (atlag/osztalyzatok.length)
                    })    
        }).catch((err)=>{
            console.log(err);
            return res.status(500).json({
                succes:false,
                message:"átlagot nem tudtuk kiszámítani szerver hiba miatt"
            })
        })
    }

   
}

module.exports={jegyAdas, leKeres, atlag}