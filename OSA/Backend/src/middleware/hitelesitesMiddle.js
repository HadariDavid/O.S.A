//könyvtárak
const jwt = require('jsonwebtoken');

/////////////////////////////////////////

//modellek
const FeketeListaModel = require("../dbModels/feketelista.model");

/////////////////////////////////////////

const {jwtSecretKey, tokenHeaderKey} = require("../app");


async function tokenHitelesites(req, res, next){

    try{
        const token = req.headers.authorization.split(' ')[1];
        //check for token
        if (!token) {
            return res.status(401)
                .json(
                    {
                        success: false,
                        message: "Error!Token was not provided."
                    }
                );
        }

        if(await FeketeListaModel.findOne({where:{token:token}}) !== null){
           return res.status(401).json({
                error:true,
                messagüzenet:"hozzáférés megtagadva (blacklisted)"
            })
        }
            
        const decodedToken = jwt.verify(token, jwtSecretKey);
            if(decodedToken){
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
