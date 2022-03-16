
const GoogleCampaign = require("../../model/GoogleCampaign");

const BlockedIplist = async (req,res)=>{
    try {
        const {resourceName} = req.body;
       if(!resourceName){
           return res.status(200).json("resourceName must be set in body !");
       }

       const result = await GoogleCampaign.find({'campaign.campaign.resourceName':resourceName});

       return res.status(200).json({status:true,result})


    } catch (error) {
       return res.status(500).json(error) 
    }
}

module.exports = BlockedIplist;