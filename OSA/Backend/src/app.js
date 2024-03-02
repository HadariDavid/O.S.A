//könyvtárak
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


//modellek
const TeremModel = require("./dbModels/termek.model");
const TanaradatlapModel = require("./dbModels/tanaradatlap.model");
const TantargyModel = require("./dbModels/tantargyak.model")
const OsztalyzatModel = require("./dbModels/osztalyzat.model");
const DiakadatlapModel = require("./dbModels/diakadatlap.model");
//////////////////////////////////////

//route-k
const logRegRouter = require("./routes/loginRegisterRoute");
const hitelesitesRouter = require("./routes/hitelesitesRoute");
//////////////////////////////////////


const app = express();

const PORT = 3000;

app.use(bodyParser.json());

dotenv.config();


/////////////////////////////////////////////adatbázis csatlakozás////////////////////////

sequelize.authenticate().then(() => {
    console.log("kapcsolat sikeresen létesült");

    sequelize.modelManager.addModel(TeremModel);
    sequelize.modelManager.addModel(TanaradatlapModel);
    sequelize.modelManager.addModel(TantargyModel);
    sequelize.modelManager.addModel(OsztalyzatModel);
    sequelize.modelManager.addModel(DiakadatlapModel);
    sequelize.sync();

}).catch((error) => {
    console.log("Az adatbázissal nem sikerült a kapcsolat");
    console.log(error);
})

///////////////////////////////////////////////////////////////////////////////////////




app.use("/", logRegRouter);
app.use("/", hitelesitesRouter);
//app.use("/", querryRouter);



app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});


