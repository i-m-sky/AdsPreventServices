const joi = require("joi");
const User = require("../../model/User");
const Subscriptions = require("../../model/Subscription");
const Jwtservice = require("../../services/JwtService");
const bcrypt = require("bcrypt")
const localRegister =  async(req,res)=>{
    
        const validateRegister = joi.object({

          name: joi.string().min(3).max(20).required(),
          email: joi.string().email().required(),
          password: joi.string().required(),
          phone:joi.string().min(10).max(15),
          domain:joi.string().min(5).max(50)

        });
  
        const { error } = validateRegister.validate(req.body);
    
        if (error) {
          return res.status(200).json({ status: false, message: error.message });
        }
        var passhash;
        try {
          
          const exist = await User.exists({ email: req.body.email });
    
          if (exist) {
            return res.status(200).json({ status: false, message: "Email already taken" });
          }
    
          passhash = await bcrypt.hash(req.body.password, 10);
    
        } catch (error) {
          return res.status(500).json({status:false,message:"opps something went wrong"});
        }
        try {
          const { name, email,phone,domain } = req.body;
    
          const createuser = new User({ name, email,phone, password: passhash,domain });
         
          const result = await createuser.save();

          const user = { id: result.id, name: result.name, role: result.role }
          
          const token = Jwtservice.sign(user);

          return res.status(200).json({ status: true, message: "Register success", user:{ user,token}  });
        }
        catch (error) {
          return res.status(500);
        }
}

module.exports = localRegister;