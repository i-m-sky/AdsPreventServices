const GoogleCampaign = require("../../model/GoogleCampaign");

const GetCampaigns = async (req,res)=>{
    try {
        const GoogleAdsId = req.body.GoogleAdsId;
        console.log("GoogleAdsId",GoogleAdsId);
        const campaigns = await GoogleCampaign.find({GoogleAdId:GoogleAdsId},{campaign:1})
        console.log(campaigns)
        return res.status(200).json({status:true,campaigns});
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = GetCampaigns;