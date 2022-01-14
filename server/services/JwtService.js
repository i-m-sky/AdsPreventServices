const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

class Jwtservice {
    static sign(payload, secret = JWT_SECRET) {

        return jwt.sign(payload, secret);
    }
    
    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports = Jwtservice;