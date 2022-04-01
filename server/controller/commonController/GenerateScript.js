const GenerateScript = (req,res) =>{
    try {
        return res.status(200).json({status:true,url:"http://localhost:8000/vinscout.js"})
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = GenerateScript;