const mongoose = require("mongoose");

const GoogleCampaignSchema = new mongoose.Schema({
    GoogleAdId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GoogleAdWord'
    },
    campaign:{
        type:Object
    },
    excludeIp:{
        type:[],
    }
});

const GoogleCampaign = new mongoose.model("GoogleCampaign",GoogleCampaignSchema);

module.exports = GoogleCampaign;

// This is very bad product from boat. I face various problem like one side speaker not working, bluetooth connection  is very bad, and lost connection many time. please resolve my issue