const States = require("../../model/States");
const GetStates = async(req, res) => {
    try {
        const { country } = req.body;
        if (!country) {
            return res.status(200).json("country name must be set in body")
        }
        const iso2 = country.charAt(0).toUpperCase()+country.charAt(1).toUpperCase()
        const result = await States.find({country_code:iso2});
        return res.status(200).json({status:true,result})
        
    } catch (error) {
        return res.status(500).json(error.message)
    }


}

module.exports = GetStates