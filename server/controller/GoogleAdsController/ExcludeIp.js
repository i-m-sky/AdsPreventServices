const GoogleAdWord = require("../../model/GoogleAdWord")
const axios = require("axios")
const FormData = require('form-data');

const ExcludeIp = async (req, res) => {

    try {
        console.log("excludeIp run")
        const { ip, account,resourceName } = req.body;

        if (!ip && !account && !resourceName) {
            return res.status(401).json("Bad request ! IpAddress, account and resourceName required")
          }

         console.log("Exclude: ",req.body)

        const form = new FormData();
        form.append('client_id', process.env.GOOGLE_CLIENT_ID);
        form.append('client_secret', process.env.GOOGLE_CLIENT_SECRET);
        form.append('grant_type', 'refresh_token');
        form.append('refresh_token', account.refresh_Token);


        const generateAccesstoken = await axios.post(`https://oauth2.googleapis.com/token?access_type=offline`, form,
            { headers: form.getHeaders() })


        console.log("Accesstoken", generateAccesstoken.data)

        const campaign = await axios.post(`https://googleads.googleapis.com/v10/customers/${account.customer_id}/googleAds:search`, {

            "query":"SELECT campaign.id, campaign.name, campaign.status, campaign.serving_status FROM campaign"

        }, {
           headers: {
                "Authorization": `Bearer ${generateAccesstoken.data.access_token}`,
                "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
                "login-customer-id": account.manager_id
            }
        })

        //Exclude ip address google ads account

        const exclude = await axios.post(`https://googleads.googleapis.com/v10/customers/${account.customer_id}/campaignCriteria:mutate`,
            {
                "customer_id": `1234567890`, "operations": [
                    { "create": { "campaign": `${resourceName}`, "negative": "true", "ip_block": { "ip_address": `${ip}` } } }
                ]

            }, {
            headers: {
                "Authorization": `Bearer ${generateAccesstoken.data.access_token}`,
                "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
                "login-customer-id": account.manager_id
            }
        })

        console.log("exclude ip", exclude.data)

        return res.status(200).json({ status: true,result:exclude.data.results});

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = ExcludeIp;