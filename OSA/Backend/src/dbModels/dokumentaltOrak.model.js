const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const dokumentaltOrak = sequelize.define("dokumentaltOrak", {
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
    tableName:"dokumentaltorak",
    timestamps:false
});

module.exports = dokumentaltOrak;