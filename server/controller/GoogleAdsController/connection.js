const GoogleAdsApi = require("google-ads-api")

const connection = (req,res)=>{
    const client = new GoogleAdsApi({

        client_id: '<YOUR_CLIENT_ID>',
        client_secret: '<YOUR_CLIENT_SECRET>',
        developer_token: 'IGEN9oG-UEfcv9qHgIpoEg',

    })

    const customer = client.Customer({
        customer_account_id: '123-123-123',
        login_customer_id: '456-456-456', 
        linked_customer_id: '789-789-789', 
        refresh_token: '<YOUR_REFRESH_TOKEN>',
    })

    const campaigns =  customer.campaigns.list()
    console.log(campaigns)
}

module.exports = connection;