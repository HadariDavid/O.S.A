//könyvtárak
const express = require("express");

///////////////////////////////////////////////

//Router
const hitelesitesRouter = express.Router();
//Controller
const tokenVerifyController = require("../controllers/hitelesitesController");

//metódusok
hitelesitesRouter.get("/hitelesites", tokenVerifyController.tokenHitelesites);

module.exports = hitelesitesRouter;
