
const GetManagerId = async(req, res) => {
    try {
        const {managerId,refreshToken} = req.body;
    
        if(!managerId && !refreshToken){
            return res.status(200).json('managerId and refreshToken must be set in body!')
        }

        return res.status(200).json({result:{refreshToken,managerId},status:true});

    } catch (error) {
        return res.status(200).json(error)
    }
}
module.exports = GetManagerId;

