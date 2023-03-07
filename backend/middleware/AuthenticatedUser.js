require('dotenv').config();
const jwt = require('jsonwebtoken');

function createWebToken(user){
    return jwt.sign({
        email: user.userEmail,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
};

function verifyWebToken(req,res,next){
    try{
        const token = req.cookies["LegitUser"] !== null ? req.cookies["LegitUser"] : "Please Register";
        const valid = null;
        if(token !== "Please Register"){
            valid = jwt.verify(token, process.env.SECRET_KEY);
            if(valid){
                req.authenticated = true;
                next();
            } else res.status(400).send({err: "Please Register."})
        } else res.status(400).send({err: "Please Register!"})
    } catch(err){
        res.status(400).send({err: err.message})
    }
}

module.exports = {createWebToken, verifyWebToken};