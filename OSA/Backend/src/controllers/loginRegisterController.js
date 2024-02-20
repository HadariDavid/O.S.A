
const sequelize = require("../db");
const bcrypt = require("bcrypt");

const TanarModel = require("../dbModels/tanaradatlap.model");
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

const hash = await bcrypt.hash(req.body.jelszo, 13).then(()=>{ hashReady = true});
    
    if(hashReady){
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
            jelszó: hash
            
            });
            console.log(tanar1.toJSON());

            tanar1.save().then(() => {

                res.status(200).json({
                    "response":"sikeres regisztráció"
                });
            });
    }         
        
}
}
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



async function registTeacher(req, res){

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


//const jelszo = req.body.jelszo;

// 13 salt egy fél mp kódolást igényel és lefordítást bejelentkezési idő kb 1 mp
//const hash = await bcrypt.hash(jelszo, 13);

/* visszafordítás
const isMach = await bcrypt.compare("Password1", hash);
console.log(isMach);
*/

//hash-elt jelszót feltölteni adatbázisba (várunk ilyen mezőre)
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
