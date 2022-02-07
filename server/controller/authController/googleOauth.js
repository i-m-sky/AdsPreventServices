const { OAuth2Client } = require('google-auth-library')
const User = require("../../model/User");
const Jwtservice = require("../../services/JwtService");
const bcypt = require('bcrypt');

const googleOauth = async (req, res) => {


  try {
    const { token } = req.body
    
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();
   
    const exist = await User.exists({ email: email });

    if (exist) {
      const result = await User.findOne({ email: email });
      const user = { name: result.name, email: result.email, role: result.role }
      const token = Jwtservice.sign(user);
      return res.status(200).json({ status: true, message: "Register success", user: { user, token } })

    } else {
      const password = await bcypt.hash(email + process.env.JWT_SECRET, 10);
      const createuser = new User({ name, email, password });
      const result = await createuser.save();
      const user = { name: result.name, role: result.role, email: result.email }
      const token = Jwtservice.sign(user);
      return res.status(200).json({ status: true, message: "Register success", user: { user, token } })
    }
  } catch (error) {
    return res.status(500).json("opps something went wrong");
  }
}

module.exports = googleOauth;



