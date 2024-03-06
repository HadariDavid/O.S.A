//könyvtárak
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

/////////////////////////////////////////



function tokenHitelesites(req, res, next){
dotenv.config();

    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try{
        const token = req.headers.authorization.split(' ')[1];
        //check for token
        if (!token) {
            res.status(401)
                .json(
                    {
                        success: false,
                        message: "Error!Token was not provided."
                    }
                );
        }


        const decodedToken = jwt.verify(token, jwtSecretKey);
        if(decodedToken){

           
            res.status(200).json(
            {
                success: true,
                email: decodedToken.email
                });
         next();
        }else{
            return res.status(520).json({
                error:true,
                message:"hitelesítés közben hiba történt",
                type:1 //token nem hitelesíthető
            });
        }

    }catch(error){
        console.log(error);
        return res.status(401).json({
            error:true,
            messagüzenet:"hozzáférés megtagadva"
        })
    }


}

module.exports = {tokenHitelesites};
