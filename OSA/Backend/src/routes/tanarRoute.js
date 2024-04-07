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
const osztalyzatokController = require("../controllers/osztalyzatokController");
const oraDokumentalasController = require("../controllers/oraDokumentalasController");


//metódusok

//profil/////////////
tanarRouter.get("/tanar", tokenHitelesites, profilController.getTanar);

tanarRouter.get("/tanar/adatok",tokenHitelesites,profilController.getAllTanarAdat);

tanarRouter.get("/tanar/orarend",tokenHitelesites,profilController.getOrarend );

//////osztalyok//////////
tanarRouter.get("/tanar/osztalyok",tokenHitelesites,profilController.tanarGetOsztalyok);

tanarRouter.get("/tanar/osztalyok/atlag",tokenHitelesites,/*controllet*/);

tanarRouter.get("/tanar/osztalyok/diakok",tokenHitelesites,profilController.tanarGetOsztalyok);

tanarRouter.get("/tanar/osztalyok/diakok/ertekeles",tokenHitelesites,/*controllet*/);

//osztalyzatok///////////////////////////
tanarRouter.put("/tanar/osztalyzatok",tokenHitelesites, osztalyzatokController.jegyAdas);

tanarRouter.get("/tanar/osztalyzatok",tokenHitelesites, osztalyzatokController.leKeres);

tanarRouter.get("/tanar/osztalyzatok/atlagszamitas",tokenHitelesites,osztalyzatokController.atlag);
   
//mulasztasok/////////////////////////////////
tanarRouter.get("/tanar/mulasztasok",tokenHitelesites, hianyzasController.hianyzasokTanarOldalLeker);

tanarRouter.put("/tanar/mulasztasok",tokenHitelesites, hianyzasController.hianyzaIras);

tanarRouter.patch("/tanar/mulasztasok",tokenHitelesites, hianyzasController.igazolas);

//óra dokumentálása///////////////////////////////
tanarRouter.put("/tanar/oradokumentalas",tokenHitelesites,oraDokumentalasController.oraDokumentalas)



module.exports = tanarRouter;
