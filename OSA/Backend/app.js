//require your shit
const express = require("express");
const bodyParser = require("body-parser");

//use your required shit
const app = express();

//variables
const PORT = 3000;

app.use(bodyParser.json());


/* bejelentkezéshez szükséges om azonosító és jelszó */
const users = [
    {name:"peti", password:"123"},
    {name:"sanyi", password:"alma"},
    {name:"raaak", password:"gyasz"}
];

var currentUser;

//////////////////////////////////// bejelentkezés ellenörzés //////////////////////////////////////////////

app.get("/", (req,res) =>{
    res.status(200).console.log("server fut");
})

app.post("/bejelentkezes", (req, res) => {
    if(req.body.name === undefined){
        res.status(400).json({
            "error":"felhasználónév nincs megadva"
        });
        return;
    }

    if(req.body.password === undefined){
        res.status(400).json({
            "error":"jelszó nincs megadva"
        });
        return;
    }


    //users.forEach((user) => {
        ///név keresése hogy van-e ilyen letárolva ha nincs térjen vissza
        if(users.find((({ name }) => name === req.body.name)) === undefined){
            res.status(400).json({
                "error":"nincs ilyen felhasználónév"
            });
            return;
        }

        let bejelentkezesAdatok = users.find((({ name }) => name === req.body.name));
        if( bejelentkezesAdatok.password === req.body.password){
            res.status(200).json({
                "response":"sikeres bejelentkezés!",
                "name": bejelentkezesAdatok.name
                    
            });
        }else{
            res.status(400).json({
                "error":"ilyen bejelentkezési adatokkal nincs fiók"
            })
        }
       
    });

//});
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// kijelentkezés //////////////////////////////////////////////

app.get("kijelentkezes", (req,res) =>{

    if(currentUser === undefined){
        app.status(400).json(
            {"response": "nincs felhasználó bejelentkezve"}
        );
        return;
    }

    currentUser = undefined;
    app.status(200).json({"status":"sikeres kijelentkezés"}
    );

});

////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////// regisztráció //////////////////////////////////////////////

app.post("/regisztracio", (req,res)=>{

    if(req.body.name === undefined){
        res.status(400).json({
           "error": "adjon meg egy felhasználónevet" 
        });
        return;
    }

    if(req.body.password === undefined){
        res.status(400).json({
            "error": "adjon meg egy jelszót" 
        });
        return;
    }

    users.push(
        {"name": req.body.name, "password":req.body.password}
        );
    
    res.status(200).json({
        "response":"sikeres regisztráció"
    });

    /*
    users.forEach((user) =>{
        console.log("felhasználó: " + user.name + "; jelszó: " + user.password)
    });*/
});

//////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log(`A szerver elindult a http://localhost:${PORT} -es porton!`);
});
