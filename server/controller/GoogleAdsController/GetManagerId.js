
const Subscription = require("../../model/Subscription");
const GoogleAdWord = require("../../model/GoogleAdWord");

const GetManagerId = async(req, res) => {
    try {
        const managerId = req.body.managerId;
        const refreshToken = req.body.refreshToken;
        console.log("frontend data: ",managerId,refreshToken)

        if(!managerId && !refreshToken){
            return res.status(200).json('Manager id NOT FOUND')
        }
    
        const result = await GoogleAdWord.updateOne({refreshToken},{$set:{manager_id:managerId}})

        return res.status(200).json({result:{refreshToken,managerId},status:true});

    } catch (error) {
        return res.status(200).json(error)
    }
}
module.exports = GetManagerId;

