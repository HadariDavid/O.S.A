const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Tanaradatlap = sequelize.define("Tanardatlap", {
    id : {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull:false,
        comment:"tanuló om azonosítója"
    },
    jelszo : {
        type: DataTypes.STRING,
        allowNull: true,
        comment:"jelszó",
      },
  admin:{
    type:DataTypes.TINYINT,
    allowNull:false,
  },
  osztalyFoId : {
    type: DataTypes.STRING,
    allowNull:false,
    comment:"azonosító ami jelzi a diák osztályát",
  },
  osztalyok: {
    type: DataTypes.STRING,
    allowNull:false,
    comment:"azonosító ami jelzi a diák osztályát",
  },
  csaladNev:{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"Tanuló család neve"
  },
  keresztNev :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"Tanuló keresztneve"
  },
  neme:{
    type:DataTypes.STRING,
    allowNull:false
  },
  szuletesiHely :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"Tanuló születési helye"
  },
  szuletesiDatum :{
    type: DataTypes.DATE,
    allowNull:false,
    comment:"Születési dátum"
  },
  szuletesiOrszag :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"születési ország"
  },
  allampolgarsag :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"állampolgárság"
  },
  AnyjaLeanyVezetekneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  AnyjaLeanyKeresztneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  telefon :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"tanuló telefon szám"
  },
  email :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"tanuló e-mail"
  },
  Orszag:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Iranyitoszam:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  Kozseg:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Ut:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Hazszam:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  taj :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"diák TAJ száma"
  },
  adoszam:{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"diák adószáma"
  },
  bankszamla:{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"diák bankszámla"
  },
 oktatasiAzonosito: {
    type: DataTypes.STRING,
    allowNull:true,
    comment:"tanár om azonosítója"
 },
  iskolaAzonosito :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"az iskola azonosítója"
  },
  oraId :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"órarendjének id-je"
  },
  szerep :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"tanuló vagy tanár"
  },
  jogviszonyKezdete :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"jogviszony kezdete"
  },
  jogviszonyVartVege :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"jogviszony várt vége"
  },
  jogviszony :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"jogviszony megnevezése"
  },
  szakok:{
    type:DataTypes.STRING,
    allowNull:false,
    comment:"milyen témában taníthat a tanár"
  }
},{
    tableName: "tanaradatlap",
    timestamps:false
});

module.exports = Tanaradatlap;
