const GoogleRefreshToken = require("../../model/GoogleRefreshToken")

const GetManagerId = (req, res) => {
    try {
        const managerId = req.body.managerId;
        if(!managerId){
            return res.status(200).json('Manager id NOT FOUND')
        }
        const result = await = GoogleRefreshToken.find()


    } catch (error) {
        return res.status(200).json(error)
    }
}
module.exports = GetManagerId;

