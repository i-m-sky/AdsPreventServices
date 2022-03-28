const Countrie = require("../../model/Countries");

const Countries = async(req,res)=>{
 try {
    const Countries = await Countrie.find().limit(9);
    return res.status(200).json({status:true,Countries})
 } catch (error) {
     return res.status(200).json(error)
 }
}

module.exports = Countries;