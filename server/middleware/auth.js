
const Jwtservice = require('../services/JwtService');

const fetchuser = (req, res, next) => {

    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.status(401).send({ error:"Your token is invalid please authenticate using a valid token !" })
    }
    
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({ error:"Your token is invalid please authenticate using a valid token !!" })
    }
    try {
        const { id, name, role } = Jwtservice.verify(token);
        
        const user = {
            id,
            name,
            role
        }
        req.user = user;

        next();
    } catch (error) {
        res.status(401).send({ error:"Your token is invalid please authenticate using a valid token !!!" })
    }
}
module.exports = fetchuser;