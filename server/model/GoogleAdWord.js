const mongoose = require("mongoose");

const GoogleAd = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    refresh_Token: {
        type: String,
        unique:true
    },
    manager_id: {
        type: String,
        default:""
    },
    customer_id: {
        type: String,
        default:""
    }
});

const GoogleAdWord = new mongoose.model("GoogleAdWord",GoogleAd);
module.exports = GoogleAdWord;