const joi = require("joi");
const User = require("../../model/User");

const addDomain =  async(req,res)=>{
    console.log(req.body)
        const validateDomain = joi.object({
          
          domain:joi.string().domain().required().min(5).max(50)

        });
    
        const { error } = validateDomain.validate(req.body);
    
        if (error) {
          return res.status(200).json({ status: false, message: error.message });
        }
        try {

          const data = await User.updateOne(
            { _id: req.user.id },
            { $push: { domain:req.body.domain } }
         )
  
          res.status(200).json('New domain added ')

        } catch (error) {
          return res.status(500).json("opps something went wrong");
        }
}

module.exports = addDomain;