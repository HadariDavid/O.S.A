const {DataTypes, Association} = require("sequelize");

const sequelize = require("../db");

const Diakadatlap = sequelize.define("Diakadatlap", {
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
  osztalyId : {
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
  anyanyelv :{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"tanuló anyanyelve"
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
  AnyjaLeanyVezetekneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  AnyjaLeanyKeresztneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  GondviseloVezetekneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  GondviseloKeresztneve:{
    type:DataTypes.STRING,
    allowNull:false
  },
  gondviseloTelefon:{
    type: DataTypes.STRING,
    allowNull:false,
    comment:"gondviselő telefonszáma"
  },
  gondviseloEmail :{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"gondviselő e-mail"
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
  szemelyi:{
    type:DataTypes.STRING,
    allowNull:false
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
  Kepzes :{
    type: DataTypes.STRING,
    allowNull:false
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
  hatranyosHelyzet:{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"hátrányos helyzet azonosítója (hhh)"
  },
  kepesitesek :{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"van-e a diáknak valamilyen képesítése"
  },
  egyediMegjegyzes :{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"egyedi megjegyzés ha van pl bejárós"
  },
  igaztolatlanHianyzas :{
    type: DataTypes.INTEGER,
    allowNull:true,
    comment:"igazolatlan hiányzások száma"
  },
  igazoltHianyzas :{
    type: DataTypes.STRING,
    allowNull:true,
    comment:"igazolt hiányzások száma"
  },
},{
    tableName: "diakadatlap",
    timestamps:false
}
);

module.exports = Diakadatlap;