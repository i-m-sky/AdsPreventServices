const axios = require("axios")
const FacebookAdSetup = async (req, res) => {
    console.log("here")
    try {
        const { access_Token } = req.body
        console.log(req.body)

        if (!access_Token) {
            return res.status(200).json("access token must be set in body");
        }
        const longLiveAccessToken = await axios.get(`https://graph.facebook.com/v13.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&fb_exchange_token=${access_Token}`)
        console.log(longLiveAccessToken)
        const Adsaccount = await axios.get(`https://graph.facebook.com/v13.0/me/adaccounts?fields=name,account_id,account_status,id&access_token=${longLiveAccessToken.data.access_token}`)

        return res.status(200).json({status:true,Adsaccount:Adsaccount.data,access_token:longLiveAccessToken.data.access_token})

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = FacebookAdSetup;