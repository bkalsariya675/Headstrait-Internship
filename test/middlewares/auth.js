const jwt = require('jsonwebtoken');
const jwtPrivateKey = "xyz";

const authToken = (req, res , next) => {
    const bearerHeader = req.header('Authorization');
    if(!bearerHeader) {
        return res.status(401).send("Access Denied. No token Provided");
    } 
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    if(!token) {
        return res.status(401).send("Access Denied. No token Provided");
    } else {
        try {
            const decoded = jwt.verify(token, jwtPrivateKey);
            req.user = decoded;
            next();
        } catch (err) {
            res.status(400).send("Invalid token")
        }
    }
}

module.exports =  authToken;