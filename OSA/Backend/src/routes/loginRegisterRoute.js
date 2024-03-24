//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");
const {adminHitelesites} = require("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const logRegRouter = express.Router();

//Controller
const logRegController = require("../controllers/loginRegisterController");

//metódusok
logRegRouter.post("/kijelentkezes",tokenHitelesites, logRegController.logout);
logRegRouter.post("/bejelentkezes", logRegController.login);
logRegRouter.put("/admin/regist-d",adminHitelesites, logRegController.registStudent);
logRegRouter.put("/admin/regist-t",/*adminHitelesites*/ logRegController.registTeacher);

module.exports = logRegRouter;
