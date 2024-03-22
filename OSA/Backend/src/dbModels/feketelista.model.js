const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const FeketeLista = sequelize.define("FeketeLista", {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
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
    tablename:"feketelista",
    timestamps:false,
});

module.exports = FeketeLista;