const GenerateScript = (req,res) =>{
    try {
        return res.status(200).json({status:true,url:`${process.env.SERVER}/vinscout.js`})
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = GenerateScript;