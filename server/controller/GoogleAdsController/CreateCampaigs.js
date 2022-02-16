const { GoogleAdsApi } = require('google-ads-api')

const CreateCampaigs = async(req,res) => {

    try {

        const client = new GoogleAdsApi({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
        })

        const { account_id, payload } = req.body;
        console.log(account_id,payload.name)
        // create your Customer
        const customer = client.Customer({
            customer_account_id: account_id,
            manager_cid: '5364102549',
            refresh_token: '1//0gnwDRB98N0XgCgYIARAAGBASNwF-L9Ir52e2EOIDyGPLnpbRt-msWHsvqvj0PBEz0dAbSQh5a29LbxkVDeGc9-c8WlmlegRua8w'
        });
     
        const response = await customer.campaignBudgets.create({
            amount_micros: payload.budget.amount_micros,
            explicitly_shared: false
        });
     
        delete payload.budget;
        
            const new_campaign = await customer.campaigns.create({
                budget_id: response.id,
                ...payload
            });
            // send the response. it'll be something like { id: ..., resource_name: ... }
            res.send(new_campaign);

        } catch (error) {
            return res.status(500).json({ error: error.message, message: "internal server error" })
        }

}

module.exports = CreateCampaigs;