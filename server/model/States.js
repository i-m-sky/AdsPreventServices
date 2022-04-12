const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    country_code:{
        type:String,
    },
    iso2:{
        type:String
    }
});

const State = new mongoose.model("State",stateSchema);

module.exports = State;