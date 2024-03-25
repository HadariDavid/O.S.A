//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");

const {adminHitelesites} = require("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const profilRouter = express.Router();

//Controller
const profilController = require("../controllers/profilControllers");

//metódusok
profilRouter.get("/diak", tokenHitelesites, profilController.getDiak);

profilRouter.get("/tanar", tokenHitelesites, profilController.getTanar);






module.exports = profilRouter;
