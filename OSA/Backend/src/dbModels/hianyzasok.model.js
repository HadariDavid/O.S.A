const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Hianyzasok = sequelize.define("Hianyzasok", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true,
    },
    datuma: {
        type: DataTypes.DATE,
        allowNull: false,
       
    },
    orakSzama: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    igazoltOrak:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    azonosito:{
        type: DataTypes.STRING,
        allowNull:false,
        comment:"diák azonosítója"
    },
    igazolva:{
        type: DataTypes.STRING,
        allowNull:true,
        comment:"igazolatlan, orvosi igazolás, szülői nap, iskolai érdekű"
    }
}, {
    tableName:"hianyzasok",
    timestamps:false
});

module.exports = Hianyzasok;