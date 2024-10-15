const jwt = require("jsonwebtoken");

const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
  //console.log('refresh Token:', process.env.REFRESH_TOKEN_SECRET);
};

module.exports = { generateRefreshToken };
