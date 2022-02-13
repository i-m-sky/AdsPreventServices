const { GoogleAdsApi } = require("google-ads-api")

const GoogleAdsCampaigns = async (req, res) => {

    try {

        console.log(req.body)
        const refresh_token = req.body.res.data.refresh_token;

        console.log("re token:",refresh_token)
       

        const client = new GoogleAdsApi({

            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,

        });

        const customer = client.Customer({
            customer_account_id: '441-307-6811',
            refresh_token: refresh_token,
        })


        const campaigns = await customer.query(`
        SELECT 
          campaign.name, campaign.status
        FROM 
          campaign`);
          console.log(campaigns)


    } catch (error) {
        return res.json("opps somethig went wrong")
    }

}

module.exports = GoogleAdsCampaigns;