const jwt = require("jsonwebtoken");
const jwtPrivateKey = "xyz";

module.exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, jwtPrivateKey);
}