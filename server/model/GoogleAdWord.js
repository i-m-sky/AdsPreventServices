const mongoose = require("mongoose");

const GoogleAd = new mongoose.Schema({
    subsId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
    refresh_Token: {
        type: String,
        unique:true
    },
    manager_id: {
        type: String,
        unique:true,
        default:null
    },
    customer_id: {
        type: String,
    }
});

const GoogleAdWord = new mongoose.model("GoogleAdWord",GoogleAd);
module.exports = GoogleAdWord;