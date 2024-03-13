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
logRegRouter.get("/logout",tokenHitelesites, logRegController.logout);
logRegRouter.post("/login", logRegController.login);
logRegRouter.put("/registration/student",tokenHitelesites, logRegController.registStudent);
logRegRouter.put("/registration/teacher",tokenHitelesites, logRegController.registTeacher);

module.exports = logRegRouter;
