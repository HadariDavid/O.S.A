const {DataTypes} = require("sequelize");

const sequelize = require("../db");

const Osztalyzat = sequelize.define("Osztalyzat", {

/*
 `tanulo id` varchar(255) NOT NULL,
  `tantargy id` varchar(255) NOT NULL,
  `osztalyzat` int(11) NOT NULL,
  `datum` date NOT NULL,
  `oka` varchar(255) N
*/

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
}

},
{
    tableName:"osztalyzatok",
    timestamps:false
});

module.exports =  Osztalyzat;