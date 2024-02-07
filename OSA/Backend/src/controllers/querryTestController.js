const sequelize = require("../db");

/* https://www.techiediaries.com/how-to-use-sequelize-findall/ */
const TanarModel = require("../dbModels/tanarak.model");

function lekerdez(req,res){

   const tanar = TanarModel.findAll({
        where:{
            id: req.body.id
        }
    }
    ).then((data) =>{
        console.log(data[0].tanarneve);
    });

    
}


module.exports = {
    lekerdez
}