const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const dokumentaltOrak = sequelize.define("dokumentaltOrak", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    osztaly:{
        type: DataTypes.STRING,
        allowNull: false,
    
    },
    tantargy: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    oraSzama: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    tanar:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    datum:{
        type:DataTypes.DATE,
        allowNull:false
    }

}, {
    tableName:"dokumentaltorak",
    timestamps:false
});

module.exports = dokumentaltOrak;