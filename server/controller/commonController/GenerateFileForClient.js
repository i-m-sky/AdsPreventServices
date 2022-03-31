
const fs = require('fs');
const path = require('path')

const GenerateFileForClient = (req, res) => {
    try {
        const filepath = path.join(__dirname + "../../../vinscout.js")
        res.sendFile(filepath)
        res.status(200).json({status:true,url:"http://localhost:8000/vinscout.js"})
    } catch (error) {
       return res.status(500).json(error) 
    }
   
}

module.exports = GenerateFileForClient;