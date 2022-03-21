const bizSdk = require('facebook-nodejs-business-sdk');
const FacebookAdSetup = async (req, res) => {
    try {
        const { data } = req.body
        const accessToken = data.accessToken;
        // console.log("access", accessToken)
        // const api = adsSdk.FacebookAdsApi.init(accessToken);
        // const AdAccount = adsSdk.AdAccount;
        // const account = new AdAccount('act_292452864950209');
        // const da = await account.read([AdAccount.Fields.name, AdAccount.Fields.age,AdAccount.Fields.amount_spent])
        // console.log(da)


        const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
        const AdAccount = bizSdk.AdAccount;
        const Campaign = bizSdk.Campaign;

        const account = new AdAccount('act_292452864950209');
    
        const accountdata = await account.read([AdAccount.Fields.name]);
        console.log("account data: ",accountdata);
        const camp = await accountdata.getCampaigns([Campaign.Fields.name,Campaign.Fields.id], { limit: 10 })
        console.log("cmap",camp)


    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}

module.exports = FacebookAdSetup;