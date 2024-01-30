const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Tantargy = sequelize.define("Tantargy", {
    id : {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
        comment:"tantargy azonosítója",
    },
    tantargynev: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Terem neve",
    },
    csoportositas: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:"tantárgy típusa",
    }
}, {
    tableName:"tantargyak",
    timestamps:false
});

module.exports = Tantargy;