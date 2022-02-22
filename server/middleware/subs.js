
const Subscription = require("../model/Subscription")

const subs = async(req,res,next)=>{

    const exists = await Subscription.exists({ userId: req.user.id })
    if (!exists) {
        const subscription = new Subscription({
            userId: req.user.id,
            lastProcess: new Date().setDate(new Date().getDate()),
            nextPayment: new Date().setDate(new Date().getDate() + 7),
            status: true

        });

        const result = await subscription.save();

        console.log(result);
        req.user = {subsId:result.id}
        console.log("exists run")
        return next();
    }
    console.log("not exists run")
    return res.status(200).json({Subscription:false});
}

module.exports = subs;