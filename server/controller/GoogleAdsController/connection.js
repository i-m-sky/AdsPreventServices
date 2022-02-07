const GoogleAdsApi = require("google-ads-api")

const connection = (req,res)=>{
    const client = new GoogleAdsApi({

        client_id:process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        developer_token: process.env.DEVELOPER_TOKEN,

    })

    const customer = client.Customer({
        customer_account_id: '299-753-2433',
        refresh_token: '',
    })

    const campaigns =  customer.campaigns.list()
    console.log(campaigns)
}

module.exports = connection;