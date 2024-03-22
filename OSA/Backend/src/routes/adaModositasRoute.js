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
modositasRouter.get("/admin/adatmodositas",tokenHitelesites, modositasController.getUser);
modositasRouter.patch("/admin/adatmodositas",tokenHitelesites,modositasController.patchUser);
modositasRouter.delete("/admin/adatmodositas",tokenHitelesites,modositasController.deleteUser)




module.exports = modositasRouter;
