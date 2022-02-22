
const Subscription = require("../../model/Subscription");
const GoogleAdWord = require("../../model/GoogleAdWord");

const GetManagerId = async(req, res) => {
    try {
        const managerId = req.body.managerId;
        if(!managerId){
            return res.status(200).json('Manager id NOT FOUND')
        }

        const subs = await Subscription.find({userId:req.user.id});
        const subsId = subs[0]._id

        const result = await GoogleAdWord.update({subsId:subsId},{$set:{manager_id:managerId}})
        console.log("res",result)

        return res.status(200).json({ManagerId:managerId,status:true});

    } catch (error) {
        return res.status(200).json(error)
    }
}
module.exports = GetManagerId;

