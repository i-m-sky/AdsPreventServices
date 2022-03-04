const SpamIp = require("../../model/SpamIp");

const DetectedIps = async(req,res)=>{
    try {

        const result = await SpamIp.find().sort({weightage:-1,updatedAt:-1}).limit(20)
      
        return res.status(200).json({status:true,result})
    } catch (error) {
        return res.status(500).json(error.message)   
    }
}


module.exports = DetectedIps;