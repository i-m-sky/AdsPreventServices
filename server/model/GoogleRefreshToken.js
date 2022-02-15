
const mongoose = require('mongoose');

const GoogleRefreshTokenSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   refresh_Token:{
       type:String,
       required:true,
       unique:true
   }
  
},{timestamps:true});

const GoogleRefreshToken = mongoose.model("google_refresh_token",GoogleRefreshTokenSchema);

module.exports = GoogleRefreshToken;