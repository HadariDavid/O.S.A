const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Osztalyzat = sequelize.define("Osztalyzat", {

  id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
},

tanuloID: {
  type: DataTypes.STRING,
  allowNull: false,
  primaryKey: true,
  comment:"tanuló id-je"
},
tantargyID: {
  type: DataTypes.STRING,
  allowNull: false,
  comment:"milyen tantárgyra kapta",
},
osztalyzat: {
  type: DataTypes.INTEGER,
  allowNull:false,
  comment: "hanyast kapott"
},
datum: {
  type: DataTypes.DATE,
  allowNull: false,
  comment:"mikor kapta"
},
oka:{
  type: DataTypes.STRING,
  allowNull:false,
},
tanar:{
  type:DataTypes.STRING,
  allowNull:false
}

},
{
    tableName:"osztalyzatok",
    timestamps:false
});

module.exports =  Osztalyzat;