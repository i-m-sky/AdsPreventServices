const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    iso3:{
        type:String
    },
    iso2:{
        type:String
    }
})

const Countrie = new mongoose.model("Countrie",CountrySchema);

module.exports = Countrie;