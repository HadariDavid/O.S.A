const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Orarend = sequelize.define("Orarend", {
    osztaly:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    nap:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    ora:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    tanar:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    terem:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    tableName:"orarend",
    timestamps:false
});

module.exports = Orarend;