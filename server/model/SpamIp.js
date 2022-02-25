const mongoose = require("mongoose");

const SpamIpSchema = new mongoose.Schema({

    resource:{
        type:String,
        required:true
    },
    ip:{
        type:String,
        required:true,
        unique:true
    },
    weightage:{
        type:Number,
        default:0
    },
    ipranges:{
        type:Array,
        default:[]
    }
    
},{timestamps:true});

const SpamIp = new mongoose.model("SpamIp",SpamIpSchema);

module.exports = SpamIp;