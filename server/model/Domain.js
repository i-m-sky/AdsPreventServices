const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Domain:{
        type:String,
        required:true,
        unique:true
    },
  
},{timestamps:false});

const Domain = mongoose.model("Domain",DomainSchema);

module.exports = Domain;