//könyvtárak
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

/////////////////////////////////////////



function tokenHitelesites(req, res){
dotenv.config();

    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try{
        const token = req.headers.authorization.split(' ')[1];
        //check for token
        if (!token) {
            res.status(200)
                .json(
                    {
                        success: false,
                        message: "Error!Token was not provided."
                    }
                );
        }


        const decodedToken = jwt.verify(token, jwtSecretKey);
        if(decodedToken){
            return res.status(200).json(
            {
                success: true,
                email: decodedToken.email
                
            }
        );
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

    /*test for verification 
     "success": true,
    "data": {
        "userId": "123456789",
        "email": "email@email.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXYiOiJTw6FuZG9yIiwidXNlcklEIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNzA5Mjk2MTc4fQ.sp-h4feALC4r1l7uQZ-GWazQuUZRwGta7kGG9cjTvzc"
    }
    */
}

module.exports = {tokenHitelesites};