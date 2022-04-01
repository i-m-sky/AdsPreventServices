
const fs = require('fs');
const path = require('path')

const MainScript = (req, res) => {
    try {
        const filepath = path.join(__dirname + "../../../vinscout.js")
        res.sendFile(filepath)
        
    } catch (error) {
       return res.status(500).json(error) 
    }
   
}

module.exports = MainScript;