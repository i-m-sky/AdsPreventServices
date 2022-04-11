
const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    campaignId:{
        type:String,
        required:true,
    },
    ip:{
        type:String,
        required:true,
    },
    fun:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Schedule = mongoose.model("Schedule",ScheduleSchema);

module.exports = Schedule;
