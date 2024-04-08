//könyvtárak
const sequelize = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { where } = require("sequelize");

///////////////////////////////////////////////////

//modellek
const TanaradatlapModel = require("../dbModels/tanaradatlap.model");
const DiakadatlapModel = require("../dbModels/diakadatlap.model");
const FeketeListaModel = require("../dbModels/feketelista.model");

///////////////////////////////////////////////////

const tokenHeaderKey = "FejedIsMilyenTeGyász";
const jwtSecretKey = "ARááákEgyeKiALeskelődőSzemed";


//adat lekódolás
// 13 salt egy fél mp kódolást igényel és lefordítást bejelentkezési idő kb 1 mp
async function hashData(data){
    return await bcrypt.hash(data, 13);
}



///////////////////////////////////////bejelentkezés////////////////////////////////////////////////////////
 async function login(req, res){

    //validate user
        const { id, jelszo } = req.body;
        var existingUser;

        try {

            //keressen ilyen tanár felhasználót ha nincs keresse a diákok közt
            existingUser = await TanaradatlapModel.findOne({ where : {id: id }});
            if(existingUser == null){
                existingUser = await DiakadatlapModel.findOne({where:{id: id }})
            }
            
        } catch(error) {
            console.log(error)
          return  res.status(400).json({
                "response":"nincs ilyen felhasználó"
            });
            
        }

        if(existingUser == null){
            return res.status(400).json({
                "response":"nincs ilyen felhasználó"
            });
        }

        //ha a felhasználóhoz elküldött jelszó is egyezik generálja le a tokent
        if (await bcrypt.compare(jelszo, existingUser.jelszo) === true) {
            //generate JWToken 
        let payload;
            try{
                //ellenőrizzük hogy a felhasználónak van-e admin joga és azalapján állítjuk a token tartalmát
                if(existingUser.admin === undefined){   
                    payload = {
                        nev : existingUser.vezeteknev +" "+existingUser.keresztNev,
                        id: existingUser.id,
                        admin:0
                    }
                }else{
                     payload = {
                        nev : existingUser.vezeteknev +" "+existingUser.keresztNev,
                        id: existingUser.id,
                        admin: existingUser.admin
                    }
                }
            
            //token egy óráig tart 
            var token = jwt.sign(payload, jwtSecretKey, {expiresIn:"50m"});
            }catch(error){
                console.log(error);
                return res.status(520).json({
                    response:"váratlan hiba történt"
                });
            }
        }else{
            return res.status(400).json({
                response:"nincs ilyen felhasználó"
            });
        }

   
    res.status(200).json({
                message:"sikeres belépés",
                success: true,
                data: {
                    userId: existingUser.id,
                    nev : existingUser.csaladNev + " " + existingUser.keresztNev,
                    token: token,
                },
});


}

////////////////////////////////////////////kijelentkezés/////////////////////////////////////////////////////


function logout(req,res){

 FeketeListaModel.max("id").then((maxId)=>{
        if(maxId == null){
            maxId=1;
        }else{
            maxId = maxId+1;
        }

            const token = req.headers.authorization.split(' ')[1];
                const {exp} = jwt.decode(token);

                if(token === undefined){
                    return res.status(400).json({
                        status:"error",
                        message:"nincs bejelentkezve felhasználó"
                    })
                }


            const blacktoken =FeketeListaModel.build({id:maxId, token: token, exp: exp});

            blacktoken.save().then(()=>{
                    res.status(200).json({
                    succes:true,
                    message:"sikeres kijelentkezés"
                });
            });

            

    })

   
}
   
}


/////////////////////////////////////////////diák regisztráció///////////////////////////////////////////////////


async function registStudent(req, res){

  var tanulóKötAdatok = [
    "id",
    "osztalyId",
    "csaladNev",
    "keresztNev",
    "neme",
    "szuletesiHely",
    "szuletesiDatum",
    "szuletesiOrszag",
    "allampolgarsag",
    "anyanyelv",
    "AnyjaLeanyVezetekneve",
    "AnyjaLeanyKeresztneve",
    "GondviseloVezetekneve",
    "GondviseloKeresztneve",
    "gondviseloTelefon",
    "Orszag",
    "Iranyitoszam",
    "Kozseg",
    "Ut",
    "Hazszam",
    "szemelyi",
    "taj",
    "adoSzam",
    "Kepzes",
    "jogviszony",
    "jogviszonyKezdete",
  ];

  for(let i = 0; i< tanulóKötAdatok.length; i++){
    if(!Object.keys(req.body).includes(tanulóKötAdatok[i])){
        console.log(tanulóKötAdatok[i]);
        res.status(400).json({
            "error": "nem megfelelő adat került elküldésre" 
            });
            return;
    }
  };

Object.values(tanulóKötAdatok).forEach((element)=>{
    if(element == "" || element === undefined){
        res.status(400).json({
            "error": "Egyik adat hiányzik kérem ellenőrizze" 
            });
            return;
    }  
});


        const tanulo = DiakadatlapModel.build({
            id:req.body.id, //OM azonosító
            osztalyId:req.body.osztalyId, //besoroló function helye,
            csaladNev:req.body.csaladNev,
            keresztNev: req.body.keresztNev,
            neme:req.body.neme,
            szuletesiHely: req.body.szuletesiHely,
            szuletesiDatum:req.body.szuletesiDatum,
            szuletesiOrszag:req.body.szuletesiOrszag,
            allampolgarsag:req.body.allampolgarsag,
            anyanyelv:req.body.anyanyelv,
            telefon:req.body.telefon,
            email:req.body.email,
            AnyjaLeanyVezetekneve:req.body.AnyjaLeanyVezetekneve,
            AnyjaLeanyKeresztneve:req.body.AnyjaLeanyKeresztneve,
            GondviseloVezetekneve:req.body.GondviseloVezetekneve,
            GondviseloKeresztneve:req.body.GondviseloKeresztneve,
            Orszag:req.body.Orszag,
            Iranyitoszam:req.body.Iranyitoszam,
            Kozseg:req.body.Kozseg,
            Ut:req.body.Ut,
            Hazszam:req.body.Hazszam,
            gondviseloTelefon:req.body.gondviseloTelefon,
            gondviseloEmail:req.body.gondviseloEmail,
            taj:req.body.taj,
            szemelyi: req.body.szemelyi,
            adoSzam:req.body.adoSzam,
            bankszámlaszám:req.body.bankszámlaszám,
            iskolaAzonosito:12345678911,
            oraId:123,
            Kepzes:req.body.Kepzes,
            jogviszonyKezdete:req.body.jogviszonyKezdete,
            jogviszonyVartVege:req.body.jogviszonyVartVege,
            jogviszony:req.body.jogviszony,
            hatranyosHelyzet:req.body.hatranyosHelyzet,
            kepesitesek:req.body.kepesitesek,
            egyediMegjegyzes: req.body.egyediMegjegyzes,
            jelszo: await hashData(req.body.jelszo)
            
            });
            console.log(tanulo.toJSON());
    

            tanulo.save().then(() => {

                res.status(200).json({
                    "response":"sikeres regisztráció"
                });
            });
    }

/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////tanár regisztráció////////////////////////////////////////////////////////



async function registTeacher(req, res){

var tanarKötAdatok = [
            "csaladNev",
            "keresztNev",
            "neme",
            "szuletesiHely",
            "szuletesiDatum",
            "szuletesiOrszag",
            "allampolgarsag",
            "anyanyelv",
            "telefon",
            "email",
            "AnyjaLeanyVezetekneve",
            "AnyjaLeanyKeresztneve",
            "Orszag",
            "Iranyitoszam",
            "Kozseg",
            "Ut",
            "Hazszam",
            "taj",
            "adoSzam",
            "bankszámlaszám",
            "oktatasiAzonosito",
            "szerep",
            "jogviszonyKezdete",
            "jogviszonyVartVege",
            "jogviszony",
            "szakok",
            "jelszo"
            
];


for(let i = 0; i< tanarKötAdatok.length; i++){
    if(!Object.keys(req.body).includes(tanarKötAdatok[i])){
        console.log(tanarKötAdatok[i]);
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


// 13 salt egy fél mp kódolást igényel és lefordítást bejelentkezési idő kb 1 mp
        const tanar = TanaradatlapModel.build({
            id:req.body.oktatasiAzonosito,
            osztalyId:"2/14c",
            csaladNev:req.body.csaladNev,
            keresztNev: req.body.keresztNev,
            neme:req.body.neme,
            szuletesiHely: req.body.szuletesiHely,
            szuletesiDatum:req.body.szuletesiDatum,
            szuletesiOrszag:req.body.szuletesiOrszag,
            allampolgarsag:req.body.allampolgarsag,
            anyanyelv:req.body.anyanyelv,
            telefon:req.body.telefon,
            email:req.body.email,
            AnyjaLeanyVezetekneve:req.body.AnyjaLeanyVezetekneve,
            AnyjaLeanyKeresztneve:req.body.AnyjaLeanyKeresztneve,
            Orszag:req.body.Orszag,
            Iranyitoszam:req.body.Iranyitoszam,
            Kozseg:req.body.Kozseg,
            Ut:req.body.Ut,
            Hazszam:req.body.Hazszam,
            taj:req.body.taj,
            adoSzam:req.body.adoSzam,
            bankszámlaszám:req.body.bankszámlaszám,
            oktatasiAzonosito:req.body.oktatasiAzonosito,
            iskolaAzonosito:12345678911,
            oraId:123456789,
            szerep:req.body.szerep,
            jogviszonyKezdete:req.body.jogviszonyKezdete,
            jogviszonyVartVege:req.body.jogviszonyVartVege,
            jogviszony:req.body.jogviszony,
            szakok: req.body.szakok,
            jelszo: await hashData(req.body.jelszo),
            admin: req.body.admin
            
            });
            console.log(tanar.toJSON());
    

            tanar.save().then(() => {

                res.status(200).json({
                    "response":"sikeres regisztráció"
                });
            });
    }         
        
/////////////////////////////////////////////////////////////////////////////



module.exports = {
    login, registStudent, registTeacher, logout

}
