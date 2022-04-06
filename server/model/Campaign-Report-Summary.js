const mongoose = require("mongoose");

const CampaignReportSchema = new mongoose.Schema({
    campaignId:{
        type:String, 
    },
    ip:{
        type:String,
        unique:true
    },
    Geolocation:{
        type:[]
    },
    domainName:{
        type:String,
    },
    hitcount:{
        type:Number,
    }
},{timestamps:true});

const CampaignReportSummary = new mongoose.model("CampaignReportSummary",CampaignReportSchema);

module.exports = CampaignReportSummary;
