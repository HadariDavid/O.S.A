//require your shit
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");

const TeremModel = require("./dbModels/termek.model");
const TanarModel = require("./dbModels/tanarak.model");
const TantargyModel = require("./dbModels/tantargyak.model")
const OsztalyzatModel = require("./dbModels/osztalyzat.model");

const logRegRouter = require("./routes/loginRegisterRoute");
const { login, registStudent, registTeacher, logout } = require("./controllers/loginRegisterController");

//use your required shit
const app = express();

//variables
const PORT = 3000;


app.use(bodyParser.json());


/////////////////////////////////////////////database join////////////////////////

sequelize.authenticate().then(() => {
    console.log("kapcsolat sikeresen létesült");

    sequelize.modelManager.addModel(TeremModel);
    sequelize.modelManager.addModel(TanarModel);
    sequelize.modelManager.addModel(TantargyModel);
    sequelize.modelManager.addModel(OsztalyzatModel);

    sequelize.sync();

}).catch((error) => {
    console.log("Az adatbázissal nem sikerült a kapcsolat");
    console.log(error);
})

/////////////////////////////////////////////database join end////////////////////////



/////////////////////////////////////login & registration////////////////////////

app.use("/", logRegRouter);
app.get(logRegRouter, logout);
app.post(logRegRouter, login)
app.put(logRegRouter,registStudent);
app.put(logRegRouter,registTeacher);

/////////////////////////////////////login & registration end////////////////////////




app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});