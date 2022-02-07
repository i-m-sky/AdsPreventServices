const mongoose = require("mongoose");

const SpamIpSchema = new mongoose.Schema({

    ip:{
        type:Number,
        required:true
    },
    countries:{
        type:String,
        required:true
    },
    state:{
        type:String,
    },
    ipranges:{
        type:Array,
        default:[]
    }
    
},{timestamps:false});

const SpamIp = new mongoose.model("SpamIp",SpamIpSchema);

module.exports = SpamIp;