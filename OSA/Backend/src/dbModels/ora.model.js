const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Ora = sequelize.define("Ora", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true,
    },
    azonosito:{
        type:DataTypes.STRING,
        allowNull:true
    },
    nap:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora1:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora2:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora3:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora4:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora5:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora6:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora7:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora8:{
        type:DataTypes.STRING,
        allowNull:true
    },
    ora9:{
        type:DataTypes.STRING,
        allowNull:true
    },

}, {
    tableName:"ora",
    timestamps:false
});

module.exports = Ora;