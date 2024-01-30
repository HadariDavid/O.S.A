const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Terem = sequelize.define("Tanulo", {
    id : {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
        comment:"terem azonosítója",
    },
    teremnev: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Terem neve",
    },
    teremtipus: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:"terem típusa",
    }
}, {
    tableName:"termek",
    timestamps:false
});

module.exports = Terem;