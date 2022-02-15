const joi  = require("joi");
const User = require("../../model/User");
const bcrypt = require("bcrypt");
const JwtService = require("../../services/JwtService")

const localLogin = async(req,res)=>{

    const validateLogin = joi.object({

        email: joi.string().required(),
        password: joi.string().required()

    });

    const { error } = validateLogin.validate(req.body);
  

    if (error) {
        return res.status(200).send({ status: false, message: error.message });
    }
    try {
        const userdata = await User.findOne({ email: req.body.email });
        if (!userdata) {
            return res.status(200).json({ status: false, message: "Invalid email or password" });
        }
        const compare = await bcrypt.compare(req.body.password, userdata.password);
        
        if (!compare) {
            return res.status(200).json({ status: false, message: "Invalid email or password" });
        }
        const user = { id: userdata.id, name: userdata.name, role: userdata.role}
        
        const token = await JwtService.sign(user);
        return res.status(200).json({ status: true, message: "Login success", user: { user, token } });
        
    } catch (error) {
        res.status(500);
    }

}

module.exports = localLogin;