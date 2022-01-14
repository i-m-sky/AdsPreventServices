
const Jwtservice = require('../services/JwtService');

const fetchuser = (req, res, next) => {
    
    const token = req.header('auth-token')
   
    if (!token) {
        res.status(401).send({ error: "Your token is invalid please authenticate using a valid token" })
    }
    try {
        const {id,name,role} = Jwtservice.verify(token);
      const user =
      {
          id,
          name,
          role
      }
       req.user=user;
        
        next();
    } catch (error) {
        res.status(401).send({ error: "Your token is invalid please authenticate using a valid token" })
    }
}
module.exports = fetchuser;