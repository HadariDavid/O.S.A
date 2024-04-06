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

//metódusok
diakRouter.get("/diak", tokenHitelesites, profilController.getDiak);

diakRouter.get("/diak/adatok",tokenHitelesites, profilController.getAllDiakAdat);

diakRouter.get("/diak/orarend",tokenHitelesites, profilController.getOrarend);

diakRouter.get("/diak/osztalyzatok",tokenHitelesites,/*controllet*/);

diakRouter.get("/diak/osztalyzatok/tantargynev/atlagszamitas",tokenHitelesites,/*controllet*/);

diakRouter.get("/diak/mulasztasok",tokenHitelesites,/*controllet*/);


module.exports = diakRouter;
