const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const CsengetesiRend = sequelize.define("CsengetesiRend", {
    id : {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },
    becsengo: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    kicsengo: {
        type: DataTypes.TIME,
        allowNull: false,
    }
}, {
    tableName:"csengetesirend",
    timestamps:false
});

module.exports = CsengetesiRend;