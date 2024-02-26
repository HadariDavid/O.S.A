
const sequelize = require("../db");
const bcrypt = require("bcrypt");

const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");


async function hashData(data){
    return await bcrypt.hash(data, 13);
    
}


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



async function registTeacher(req, res){

var tanarKötAdatok = [
    "vezeteknev",
    "keresztnev",
    "neme",
    "anyjaleanyneve",
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
    "szak",
    "jelszo"
];

for(let i = 0; i< tanarKötAdatok.length; i++){
    if(tanarKötAdatok[i] != Object.keys(req.body)[i] ){
        console.log(tanarKötAdatok[i] + Object.keys(req.body)[i]);
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


//const jelszo = req.body.jelszo;


/* visszafordítás
const isMach = await bcrypt.compare("Password1", hash);
console.log(isMach);
*/

// 13 salt egy fél mp kódolást igényel és lefordítást bejelentkezési idő kb 1 mp

        const tanar1 = TanaradatlapModel.build({
            id:123456789,
            osztalyId:"2/14c",
            csaladNev:req.body.vezeteknev,
            keresztNev: req.body.keresztnev,
            szuletesiHely: req.body.szülHely,
            szuletesiDatum:req.body.szülIdo,
            szuletesiOrszag:"Magyarország",
            allampolgarsag:req.body.allampolgar,
            anyanyelv:req.body.anyanyelv,
            telefon:"+36325578898",
            email:"email@email.com",
            anyjaleanyneve:req.body.anyjaleanyneve,
            lakcim:req.body.lakcim,
            taj:req.body.TAJ,
            adoSzam:req.body.adoSzam,
            bankszámlaszám:req.body.bankszámlaszám,
            oktatasiAzonosito:req.body.OMAzon,
            iskolaAzonosito:12345678911,
            oraId:123456789,
            szerep:"Tanar",
            jogviszonyKezdete:req.body.jogKezdete,
            jogviszonyVartVege:"2025.08.30",
            jogviszony:req.body.jogviszony,
            szakok: req.body.szak,
            jelszo: await hashData(req.body.jelszo)
            
            });
            console.log(tanar1.toJSON());

            tanar1.save().then(() => {

                res.status(200).json({
                    "response":"sikeres regisztráció"
                });
            });
    }         
        
/////////////////////////////////////////////////////////////////////////////



module.exports = {
    login, registStudent, registTeacher, logout

}
