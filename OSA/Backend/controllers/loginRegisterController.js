
/* bejelentkezéshez szükséges om azonosító és jelszó */
const users = [
    {name:"peti", password:"123"},
    {name:"sanyi", password:"alma"},
    {name:"raaak", password:"gyasz"}
];

var currentUser






/////////////////////////////////////////////////////////////////////////////////////////////////////
 function login(req, res){

    Object.values(req.body).forEach((element)=>{
        if(element == "" || element === undefined){
            res.status(400).json({
                "error": "Egyik adat hiányzik kérem ellenőrizze" 
                });
                return;
        }  
    });


    //users.forEach((user) => {
        ///név keresése hogy van-e ilyen letárolva ha nincs térjen vissza
        if(users.find((({ name }) => name === req.body.name)) === undefined){
            res.status(404).json({
                "error":"nincs ilyen felhasználónév"
            });
            return;
        }

        let bejelentkezesAdatok = users.find((({ name }) => name === req.body.name));
        if( bejelentkezesAdatok.password === req.body.password){
            currentUser = bejelentkezesAdatok;
            res.status(200).json({
                "response":"sikeres bejelentkezés!",
                "name": bejelentkezesAdatok.name
                    
            });
        }else{
            res.status(400).json({
                "error":"ilyen bejelentkezési adatokkal nincs fiók"
            })
        }
       
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////


function logout(req,res){
    if(currentUser === undefined){
        app.status(400).json(
            {"response": "nincs felhasználó bejelentkezve"}
        );
        return;
    }

    currentUser = undefined;
    app.status(200).json({"status":"sikeres kijelentkezés"}
    );
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//név, lakhely, om az, neme anyja neve, szül hely /idő ,állampolgárság, anyanyelv 
//gondviselő neve, rokonsági fok
//elérhetőség cím, típus(állandó ideiglenes)

//igazolványok TAJ, ADÓszám

//felvétel időpontja , szak
//jogviszony
/*={
        "nev":"",
        "neme":"",
        "anyjaNeve":"",
        "gondviselo":"",
        "rokonságiFok":"",
        "szülIdo":"",
        "szülHely":"",
        "allampolgar":"",
        "anyanyelv":"",
        "lakcim": "Magyarország, 3980, Sátoraljaújhely, Köztársaság utca, 2",
        "személyi":,
        "OMAzon":"",
        "TAJ":"",
        "adoSzam":"",
        "jogviszony":"",
        "jogKezdete":"",
        "szak":""
    }
  */

function registStudent(req, res){

  var tanulóKötAdatok = req.body;
    Object.values(tanulóKötAdatok).forEach((element)=>{
        if(element == "" || element === undefined){
            res.status(400).json({
                "error": "Egyik adat hiányzik kérem ellenőrizze" 
                });
                return;
        }  
    });
   

    users.push(
        {"name": req.body.name, "password":req.body.password} // tanulói adatokat küldjük majd
        );

    res.status(200).json({
        "response":"sikeres regisztráció"
    });

    /*
    users.forEach((user) =>{
        console.log("felhasználó: " + user.name + "; jelszó: " + user.password)
    });*/
}
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function registTeacher(req, res){
/*
tanár regisztrálási adatai
    {
        "nev":"",
        "neme":"",
        "anyjaNeve":,
        "szülIdo":"",
        "szülHely":"",
        "allampolgar":"",
        "anyanyelv":"",
        "lakcim": "Magyarország, 3980, Sátoraljaújhely, Köztársaság utca, 2",
        "személyi":"",
        "OMAzon":"", (ha első akkor kap egyet később)
        "TAJ":"",
        "adoSzam":"",
        "bankszámlaszám":;
        "jogviszony":"",
        "jogKezdete":"",
        "szak":""
    }
*/
   
var tanárKötAdatok = req.body;
Object.values(tanárKötAdatok).forEach((element)=>{
    if(element == "" || element === undefined){
        res.status(400).json({
            "error": "Egyik adat hiányzik kérem ellenőrizze" 
            });
            return;
    }  
});

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
}
/////////////////////////////////////////////////////////////////////////////




module.exports = {
    login, registStudent, registTeacher, logout

}