const { authenticate } = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;


function initialize(passport, getUserByEmail){

    const authenticateFelhasznalo = async (email, jelszo, done) => {
        const felhasznalo = getUserByEmail(email);
        if(felhasznalo == null){
            return done(null, false, {message: "nincs ilyen felhasználó"});
        }

        try{
            
            if(await bcrypt.compare(jelszo, felhasznalo.jelszo)){
                return done(null, felhasznalo)
            }else{
                return done(null, false, {message: "rossz felhasználó"});
            }

        }catch(error){
            return done(error);

        }
    };

  passport.use(new LocalStrategy({usernameField:"email", passwordField:"jelszo"}, authenticateFelhasznalo));  
  passport.serielizeUser((user, done)=> { });
  passport.deserielizeUser((id , done)=> { });

}

module.exports = {
    initialize
}