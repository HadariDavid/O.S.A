//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const logRegRouter = express.Router();

//Controller
const logRegController = require("../controllers/loginRegisterController");

//metódusok
logRegRouter.post("/kijelentkezes",tokenHitelesites, logRegController.logout);
logRegRouter.post("/bejelentkezes", logRegController.login);


module.exports = logRegRouter;
