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
const hianyzasController = require("../controllers/mulasztasokController");

//metódusok
tanarRouter.get("/tanar", tokenHitelesites, profilController.getTanar);

tanarRouter.get("/tanar/adatok",tokenHitelesites,profilController.getAllTanarAdat);

tanarRouter.get("/tanar/orarend",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/atlag",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/diakok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/diakok/ertekeles",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyzatok",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyzatok/tantargynev/atlagszamitas",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/mulasztasok",tokenHitelesites, hianyzasController.hianyzasokTanarOldalLeker);
tanarRouter.put("/tanar/mulasztasok",tokenHitelesites, hianyzasController.hianyzaIras);
tanarRouter.patch("/tanar/mulasztasok",tokenHitelesites, hianyzasController.igazolas);



module.exports = tanarRouter;
