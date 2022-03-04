
const Subscription = require("../model/Subscription")

const subs = async(req,res,next)=>{

    try {
        const result = await Subscription.findOne({userId:req.user.id});
        console.log(result)
        //next();
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = subs;