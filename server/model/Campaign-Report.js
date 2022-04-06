
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    campaignId:{
        type:String,
        required:true,
    },
    ip:{
        type:String,
        required:true,
    },
    geolocation:{
        type:Array,
        default:[]
    }
},{timestamps:true});

const Campaignreport = mongoose.model("Campaignreport",UserSchema);

module.exports = Campaignreport;
