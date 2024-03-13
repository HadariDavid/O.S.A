const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Blacklist = sequelize.define("Blacklist", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    token:{
        type:DataTypes.STRING,
        allowNull:false
    },
    exp:{
        type:DataTypes.TIME,
        allowNull:true,
    }

},{
    tablename:"blacklist",
    timestamps:false,
});

module.exports = Blacklist;