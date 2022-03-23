const bizSdk = require('facebook-nodejs-business-sdk');
const axios = require("axios")
const FacebookAdSetup = async (req, res) => {
    try {
        const { access_Token } = req.body

        if (!access_Token.accessToken) {
            return res.status(200).json("access token must be set in body");
        }
        const access_token = access_Token.accessToken;

        const Adsaccount = await axios.get(`https://graph.facebook.com/v13.0/me/adaccounts?fields=name,account_id,account_status,id&access_token=${access_token}`)

        return res.status(200).json({status:true,Adsaccount:Adsaccount.data,access_token})
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = FacebookAdSetup;