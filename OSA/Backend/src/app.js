
//könyvtárak
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const jwt = require("jsonwebtoken");
const nodeCron = require("node-cron");
const cors = require("cors");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

////////////////////////////////////////////////////////////////

//modellek
const TeremModel = require("./dbModels/termek.model");
const TanaradatlapModel = require("./dbModels/tanaradatlap.model");
const TantargyModel = require("./dbModels/tantargyak.model")
const OsztalyzatModel = require("./dbModels/osztalyzat.model");
const DiakadatlapModel = require("./dbModels/diakadatlap.model");
const FeketeListaModel = require("./dbModels/feketelista.model");

//////////////////////////////////////

//route-k
const logRegRouter = require("./routes/loginRegisterRoute");
const adatmodositasRouter = require("./routes/adaModositasRoute");
const profilRouter = require("./routes/profilRouter");

//////////////////////////////////////


const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

/////////////////////////////////////////////adatbázis csatlakozás////////////////////////

sequelize.authenticate().then(() => {
    console.log("kapcsolat sikeresen létesült");

    sequelize.modelManager.addModel(TeremModel);
    sequelize.modelManager.addModel(TanaradatlapModel);
    sequelize.modelManager.addModel(TantargyModel);
    sequelize.modelManager.addModel(OsztalyzatModel);
    sequelize.modelManager.addModel(DiakadatlapModel);
    sequelize.modelManager.addModel(FeketeListaModel);
    sequelize.sync();

}).catch((error) => {
    console.log("Az adatbázissal nem sikerült a kapcsolat");
    console.log(error);
})

///////////////////////////////////////////////////////////////////////////////////////



//blacklist ellenörzés


        nodeCron.schedule('*/1 * * * *', () => {
            FeketeListaModel.destroy({
                where: {
                    exp: {[Op.lt]:Date.now() /1000}
                }
            })

        },{
            scheduled:true,
            timezone:"Europe/Budapest"
        });

//////////////////////////////////////////////////////////////////////


//blacklist ellenörzés


        nodeCron.schedule('*/1 * * * *', () => {
            FeketeListaModel.destroy({
                where: {
                    exp: {[Op.lt]:Date.now() /1000}
                }
            })

        },{
            scheduled:true,
            timezone:"Europe/Budapest"
        });

//////////////////////////////////////////////////////////////////////



app.use("/", logRegRouter);
app.use("/", adatmodositasRouter);
app.use("/", profilRouter);




app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});
