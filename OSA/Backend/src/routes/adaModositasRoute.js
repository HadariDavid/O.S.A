//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");

const {adminHitelesites} = require("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const modositasRouter = express.Router();

//Controller
const modositasController = require("../controllers/adatmodositasController");

//metódusok
modositasRouter.get("/admin/adatmodositas",adminHitelesites, modositasController.getUser);
modositasRouter.patch("/admin/adatmodositas",adminHitelesites,modositasController.patchUser);
modositasRouter.delete("/admin/adatmodositas",adminHitelesites,modositasController.deleteUser)




module.exports = modositasRouter;
