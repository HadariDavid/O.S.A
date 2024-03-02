//könyvtárak
const express = require("express");

/////////////////////////////////////////////////////

//Router
const logRegRouter = express.Router();

//Controller
const logRegController = require("../controllers/loginRegisterController");

//metódusok
logRegRouter.get("/logout", logRegController.logout);
logRegRouter.post("/login", logRegController.login);
logRegRouter.put("/registration/student",logRegController.registStudent);
logRegRouter.put("/registration/teacher",logRegController.registTeacher);

module.exports = logRegRouter;
