const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Tanar = sequelize.define("Tanar", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
        comment:"tanár azonosítója (nevének betüiből)"
    },
    tanarneve: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:"tanár teljes neve"
    },
    szakok: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:"tanár végzetségei felsorolva"
    },
    osztalyok: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:"felsorolva az osztályok ahol tanít"
    }
}, {
    tableName:"tanarok",
    timestamps:false
});

module.exports = Tanar;