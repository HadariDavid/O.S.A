//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const modositasRouter = express.Router();

//Controller
const modositasController = require("../controllers/adatmodositasController");

//metódusok
modositasRouter.get("/adatmodositas",/*tokenHitelesites,*/ modositasController.getUser);
modositasRouter.patch("/adatmodositas",/*tokenHitelesites,*/ modositasController.patchUser);
modositasRouter.delete("/adatmodositas",/*tokenHitelesites,*/modositasController.deleteUser)




module.exports = modositasRouter;
