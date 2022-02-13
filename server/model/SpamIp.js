const mongoose = require("mongoose");

const SpamIpSchema = new mongoose.Schema({

    ip:{
        type:String,
        required:true,
        unique:true
    },
    ipranges:{
        type:Array,
        default:[]
    }
    
},{timestamps:false});

const SpamIp = new mongoose.model("SpamIp",SpamIpSchema);

module.exports = SpamIp;