const mongoose = require("mongoose");

const SpamIpSchema = new mongoose.Schema({

    resource:{
        type:String,
    },
    ip:{
        type:String,
        required:true,
        unique:true
    },
    weightage:{
        type:Number,
    },
    ipranges:{
        type:Array,
        default:[]
    }
    
},{timestamps:false});

const SpamIp = new mongoose.model("SpamIp",SpamIpSchema);

module.exports = SpamIp;