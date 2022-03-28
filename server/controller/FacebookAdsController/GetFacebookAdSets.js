
const bizSdk = require('facebook-nodejs-business-sdk');
const FacebookAds = require("../../model/FacebookAds");
const GetFacebookAdSets = async(req,res)=>{

    try {
        console.log(req.body)
        const { account_id } = req.body;
        if(!account_id){
            return res.status(200).json("account_id must be set in body")
        }

        const result = await FacebookAds.findOne({account_id:account_id});

        const AdAccount = bizSdk.AdAccount;
        const Campaign = bizSdk.Campaign;
        const access_token = "EAAJjbBz7b7YBAIyRZB3pSC8YvdgszopyL0gZCFZCnun9Wkxvg53FLaWehIgJOXYBEww5L59lqyZAU2yspS6fBICxEsnpcuZAGkDR7PoHpRgK7V9zgIZBh4Nk7CKtA3YKBgYL81JQTdzP9vcUFX7ZBUX7krrogb5BFV6GsUnY355Qiz5OL1tN8BGyAd6eUrAqI4ZD"//"EAAJjbBz7b7YBAAGZBDRMjOFcAbNUroec3e4c7NQNzL4ZCHHkh5Cjql0Gxpr2pcjUGyYTX9FQpcgfttaqXHcPvZAIDX2Yoc0siD9CVNZCjGkfGp4heFZBltnZCg2XFFnCdzGtZBtmSCHC1WMSiYFtugEvLZBeGOaDTjqUd9qLMTh643ysfgtO1mGZCfIiIluvn1TkZD";
        const id = "act_2211157139048409";
        const app_secret = process.env.FACEBOOK_APP_SECRET;
        const app_id = process.env.FACEBOOK_APP_ID;

        const api = bizSdk.FacebookAdsApi.init(access_token);
        const showDebugingInfo = true; 
        if (showDebugingInfo) {
            api.setDebug(true);
        }
        let fields, params;
        fields = [
            'name',
            'objective',
            "account_id",
            "daily_budget",
            "status",
            "start_time",
            "created_time",
            "spend_cap",
            "source_campaign",
            "stop_times",
            "targeting"
        ];
        params = {
            'effective_status': ['ACTIVE', 'PAUSED'],
        };
        const campaigns = await (new AdAccount(id)).getAdSets(
            fields,
            params
        );

        console.log("adssetdata: ",campaigns)

        const camp = []
        for (let i = 0; i < campaigns.length; i++) {
            console.log("adSets", campaigns[i]._data)
            camp.push(campaigns[i]._data)
        }
        return res.status(200).json({status:true,camp})
    } catch (error) {
     return res.status(200).json(error)
    }

}

module.exports = GetFacebookAdSets;