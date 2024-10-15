const jwt = require("jsonwebtoken");

const generateAccessToken = (user)=>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m"});
    //console.log('Access Token:', process.env.ACCESS_TOKEN_SECRET);
    //process.env.ACCESS_TOKEN_SECRET
}

module.exports = { generateAccessToken };