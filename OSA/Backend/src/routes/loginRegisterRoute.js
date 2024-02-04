const express = require("express");
const logRegRouter = express.Router();
const logRegController = require("../controllers/loginRegisterController");

logRegRouter.get("/logout", logRegController.logout);
logRegRouter.post("/login", logRegController.login);
logRegRouter.put("/registration/student",logRegController.registStudent);
logRegRouter.put("/registration/teacher",logRegController.registTeacher);

module.exports = logRegRouter;