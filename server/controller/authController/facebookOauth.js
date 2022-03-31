const User = require("../../model/User");
const bcrypt = require('bcrypt');
const Jwtservice = require("../../services/JwtService");

const axios = require("axios");

const facebookOauth = async (req, res) => {

    try {
        const { accessToken, userId } = req.body
        const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userId}/?fields=id,name,email,picture&access_token=${accessToken}`
        const data = await axios.get(urlGraphFacebook)
        const { id, name, email } = data.data;
        const exist = await User.exists({ email: email });

        if (exist) {    
            const result = await User.findOne({ email: email });
            const user = { name: result.name, email: result.email, role: result.role }
            const token = Jwtservice.sign(user);
            return res.status(200).json({ status: true, message: "Register success", user: { user, token } })

        } else {
            const password = await bcrypt.hash(email + process.env.JWT_SECRET, 10);
            const createuser = new User({ name, email, password });
            const result = await createuser.save();
            const user = { name: result.name, role: result.role, email: result.email }
            const token = Jwtservice.sign(user);
            return res.status(200).json({ status: true, message: "Register success", user: { user, token } })
        }
    } catch (error) {
        return res.status(500).json("opps something went wrong ");
    }
}

module.exports = facebookOauth;