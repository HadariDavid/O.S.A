//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");


////////////////////////////

//Router
const diakRouter = express.Router();

//Controller
const profilController = require("../controllers/profilControllers");
const mulasztasokController = require("../controllers/mulasztasokController");
const osztalyzatokController = require("../controllers/osztalyzatokController");

//metódusok
diakRouter.get("/diak", tokenHitelesites, profilController.getDiak);

diakRouter.get("/diak/adatok",tokenHitelesites, profilController.getAllDiakAdat);

diakRouter.get("/diak/orarend",tokenHitelesites, profilController.getOrarend);

diakRouter.get("/diak/osztalyzatok",tokenHitelesites,osztalyzatokController.leKeres);

diakRouter.get("/diak/osztalyzatok/atlagszamitas",tokenHitelesites,osztalyzatokController.atlag);

diakRouter.get("/diak/mulasztasok",tokenHitelesites, mulasztasokController.hianyzasokDiakOldal);


module.exports = diakRouter;
