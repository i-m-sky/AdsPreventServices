const GoogleAdWord = require("../../model/GoogleAdWord");
const Subscription = require("../../model/Subscription");
const GoogleAccountExist = async(req,res)=>{
    try {
        const subs = await Subscription.find({userId:req.user.id});
        console.log(subs)
        const googleAds = await GoogleAdWord.find({subsId:subs[0]._id});
        if(googleAds){
        return res.status(200).json({status:true,googleAds});
        }
        else{
            return res.status(200).json({status:false}); 
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = GoogleAccountExist;