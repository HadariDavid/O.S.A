const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("osadbtest", "root", "", {
    host:"localhost",
    dialect:"mariadb"
});

module.exports = sequelize;