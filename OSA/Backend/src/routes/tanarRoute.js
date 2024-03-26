//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");


////////////////////////////

//Router
const tanarRouter = express.Router();

//Controller
const profilController = require("../controllers/profilControllers");

//metódusok
tanarRouter.get("/tanar", tokenHitelesites, profilController.getTanar);

tanarRouter.get("/tanar/adatok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/orarend",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/atlag",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/diakok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/diakok/ertekeles",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyzatok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyzatok/tantargynev/atlagszamitas",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/mulasztasok",tokenHitelesites,/*controllet*/);


module.exports = tanarRouter;
