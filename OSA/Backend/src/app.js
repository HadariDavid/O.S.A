//require your shit
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const passport = require("passport");
const session = require("express-session");
const initializedPassport = require("./passport.config");
/*
initializePassport(passport, email => {return TanaradatlapModel.findAll( {where:{email: req.body.email}} )} );
*/

const TeremModel = require("./dbModels/termek.model");
const TanaradatlapModel = require("./dbModels/tanaradatlap.model");
const TantargyModel = require("./dbModels/tantargyak.model")
const OsztalyzatModel = require("./dbModels/osztalyzat.model");
const DiakadatlapModel = require("./dbModels/diakadatlap.model");

const logRegRouter = require("./routes/loginRegisterRoute");
//const querryRouter = require("./routes/querryTestRouter");
const { login, registStudent, registTeacher, logout } = require("./controllers/loginRegisterController");
const { lekerdez } = require("./controllers/querryTestController");

const app = express();

//variables
const PORT = 3000;

app.use(bodyParser.json());



/////////////////////////////////////////////database join////////////////////////

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

/////////////////////////////////////////////database join end////////////////////////


app.use(session({
    secret:"secret",
    resave:"false",
    saveUninitialized: false,
}));
initializedPassport.initialize(passport)
app.use(passport.authenticate('session'));


/////////////////////////////////////login & registration////////////////////////

app.use("/", logRegRouter);


//app.use("/", querryRouter);
//app.get(querryRouter,lekerdez);


app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});


