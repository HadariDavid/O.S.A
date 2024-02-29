const { authenticate } = require("passport");
const bcrypt = require("bcrypt");
const session = require("express-session");

const LocalStrategy = require("passport-local").Strategy;
const diakModel = require("./dbModels/diakadatlap.model");
const TanarModel = require("./dbModels/tanaradatlap.model");




async function initialize(passport){

    const authenticateFelhasznalo = async (email, kapotjelszo, done) => {
        await TanarModel.findOne({where:{email: email},}).then((felhasznalo) => geci(felhasznalo))}
           /* felhasznalo = TanarModel.findOne({
                                where:{
                                    email: email
                                },
                            },

             async function(error, felhasznalo){
                
                console.log(felhasznalo);
                if (error) { return done(error); }
                if (!felhasznalo) { return done(null, false , {message: "nincs ilyen felhasználó"}); }

                try{ 
                    if(await bcrypt.compare(jelszo, felhasznalo.jelszo)){
                        return done(null, felhasznalo);
                    }else{
                        return done(null, false, {message: "rossz felhasználó"});
                    }
                }catch(error){
                    return done(error);

                }
             })
             */

              
             
             async function geci(felhasznalo){
             if (!felhasznalo){
                console.log("probléma");
                return done(null, false, {message:"nincs ilyen felhasználó"});
             }

             if(await bcrypt.compare(felhasznalo.jelszo,"Kiskutya1")){
                console.log("jelszó egyezik");
                return done(null, felhasznalo, {message:"jelszó egyezik"});
             }else{
                return done(null, false, {message: "rossz jelszó"});
             }
            }


    

  passport.use(new LocalStrategy({usernameField:"email", passwordField:"jelszo"}, authenticateFelhasznalo)); 
  passport.serializeUser((felhasznalo, done)=> {done(null, felhasznalo.id) }); 
 // passport.deserializeUser((email, done)=> {done(null, felhasznalo.email) });




}

module.exports = {
    initialize
}
