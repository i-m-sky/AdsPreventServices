const mongoose  = require("mongoose");
const url = process.env.DB_URL;

const db = mongoose.connect(url).then((response)=>{
    console.log(`connection success..`)
}).catch((err)=>{
    console.log(`connection falid !`)
})

module.exports = db;