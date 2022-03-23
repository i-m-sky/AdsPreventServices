const mongoose = require("mongoose");

const FacebookAdSchema = new mongoose.Schema({
    subsId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
    access_Token: {
        type: String,
    },
    account_id: {
        type: String,
    }
   
});

const FacebookAd = new mongoose.model("FacebookAd",FacebookAdSchema);
module.exports = FacebookAd;