
const Subscription = require("../../model/Subscription")

const GetManagerId = async(req, res) => {
    try {
        const managerId = req.body.managerId;
        if(!managerId){
            return res.status(200).json('Manager id NOT FOUND')
        }

        const subs = await subscription.find({userId:req.user.id});

        // const subscription = new GoogleAd({});
              
        // const subs = await subscription.save();


    } catch (error) {
        return res.status(200).json(error)
    }
}
module.exports = GetManagerId;

