const mongoose = require("mongoose");

const GoogleAdSchema = new mongoose.Schema({
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
        
    },
    customer_id: {
        type: String,
      
    }
});

const GoogleAdWord = new mongoose.model("GoogleAdWord",GoogleAdSchema);
module.exports = GoogleAdWord;