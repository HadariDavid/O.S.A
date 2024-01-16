//require your shit
const express = require("express");
const bodyParser = require("body-parser");
const logRegRouter = require("./routes/loginRegisterRoute");
const { login, registStudent, registTeacher, logout } = require("./controllers/loginRegisterController");

//use your required shit
const app = express();

//variables
const PORT = 3000;

app.use(bodyParser.json());


app.use("/", foglalasRoute);

app.get(logRegRouter, logout);
app.post(logRegRouter, login)
app.put(logRegRouter,registStudent);
app.put(logRegRouter,registTeacher);




app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});