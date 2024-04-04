const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Hianyzasok = sequelize.define("Hianyzasok", {
    datuma: {
        type: DataTypes.DATE,
        allowNull: false,
       
    },
    orakSzama: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    azonosito:{
        type: DataTypes.STRING,
        allowNull:false,
        comment:"diák azonosítója"
    }
}, {
    tableName:"hianyzasok",
    timestamps:false
});

module.exports = Hianyzasok;