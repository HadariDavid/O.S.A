//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//middleware
const {tokenHitelesites} = require ("../middleware/hitelesitesMiddle");

const {adminHitelesites} = require("../middleware/hitelesitesMiddle");

////////////////////////////

//Router
const adminRouter = express.Router();

//Controller
const modositasController = require("../controllers/adatmodositasController");
const logRegController = require("../controllers/loginRegisterController");

////////////////////////////

//metódusok
adminRouter.get("/admin/adatmodositas",adminHitelesites, modositasController.getUser);
adminRouter.patch("/admin/adatmodositas",adminHitelesites,modositasController.patchUser);
adminRouter.delete("/admin/adatmodositas",adminHitelesites,modositasController.deleteUser)

adminRouter.put("/admin/regist-d",adminHitelesites, logRegController.registStudent);
adminRouter.put("/admin/regist-t",adminHitelesites, logRegController.registTeacher);


module.exports = adminRouter;
