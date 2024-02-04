
const sequelize = require("../db");


const TanarModel = require("../dbModels/tanarak.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");




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

  var tanulóKötAdatok = [
    "nev",
    "neme",
    "anyjaNeve",
    "gondviselo",
    "rokonságiFok",
    "szülIdo",
    "szülHely",
    "allampolgar",
    "anyanyelv",
    "lakcim",
    "személyi",
    "OMAzon",
    "TAJ",
    "adoSzam",
    "jogviszony",
    "jogKezdete",
    "szak"
  ];

//adat helyességének ellenörzése
  for(let i = 0; i< tanulóKötAdatok.length; i++){
    if(tanulóKötAdatok[i] != Object.keys(req.body)[i] ){
        res.status(400).json({
            "error": "nem megfelelő adat került elküldésre" 
            });
            return;
    }
  };

  //adat értékeinek ellenörzése
   Object.values(tanulóKötAdatok).forEach((element)=>{
        if(element == "" || element === undefined){
            res.status(400).json({
                "error": "Egyik adat hiányzik kérem ellenőrizze" 
                });
                return;
        }
   });
    
   
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

var tanarKötAdatok = [
    "nev",
    "neme",
    "anyjaNeve",
    "szülIdo",
    "szülHely",
    "allampolgar",
    "anyanyelv",
    "lakcim",
    "személyi",
    "OMAzon",
    "TAJ",
    "adoSzam",
    "bankszámlaszám",
    "jogviszony",
    "jogKezdete",
    "szak"
];

for(let i = 0; i< tanarKötAdatok.length; i++){
    if(tanarKötAdatok[i] != Object.keys(req.body)[i] ){
        res.status(400).json({
            "error": "nem megfelelő adat került elküldésre" 
            });
            return;
    }
  };

Object.values(tanarKötAdatok).forEach((element)=>{
    if(element == "" || element === undefined){
        res.status(400).json({
            "error": "Egyik adat hiányzik kérem ellenőrizze" 
            });
            return;
    }  
});




const tanar1 = TanarModel.build({
    id:req.body.id,
    tanarneve: req.body.tanarneve,
    szakok:req.body.szakok,
    osztalyok:req.body.osztalyok
});
console.log(tanar1.toJSON);

tanar1.save().then(() => {

     res.status(200).json({
        "response":"sikeres regisztráció"
    });
})

    /*
    users.forEach((user) =>{
        console.log("felhasználó: " + user.name + "; jelszó: " + user.password)
    });*/
}
/////////////////////////////////////////////////////////////////////////////




module.exports = {
    login, registStudent, registTeacher, logout

}