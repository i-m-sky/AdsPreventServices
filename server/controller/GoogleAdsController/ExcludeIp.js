const GoogleAdWord = require("../../model/GoogleAdWord");
const GoogleCampaign = require("../../model/GoogleCampaign");
const axios = require("axios")
const FormData = require('form-data');

const ExcludeIp = async (req, res) => {

    try {
      
        const { currentip, result, resourceName } = req.body;
        

        if (!currentip && !result && !resourceName) {
            return res.status(401).json("Bad request ! IpAddress, account and resourceName required")
        }

        const form = new FormData();
        form.append('client_id', process.env.GOOGLE_CLIENT_ID);
        form.append('client_secret', process.env.GOOGLE_CLIENT_SECRET);
        form.append('grant_type', 'refresh_token');
        form.append('refresh_token', result.refresh_Token);


        const generateAccesstoken = await axios.post(`https://oauth2.googleapis.com/token?access_type=offline`, form,
            { headers: form.getHeaders() })

            console.log(req.body)

            console.log("custome id:",result.customer_id,"ip:",currentip,"resourcename:",resourceName,"managerid",result.manager_id)

        // //Exclude ip address google ads account

        const exclude = await axios.post(`https://googleads.googleapis.com/v10/customers/${result.customer_id}/campaignCriteria:mutate`,
            {
                "customer_id": `1234567890`, "operations": [
                    { "create": { "campaign": `${resourceName}`, "negative": "true", "ip_block": { "ip_address": `${currentip}` } } }
                ]

            }, {
            headers: {
                "Authorization": `Bearer ${generateAccesstoken.data.access_token}`,
                "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
                "login-customer-id": result.manager_id
            }
        })
        console.log("here 2")

        console.log("exclude ip", exclude.data)

        await GoogleCampaign.updateOne({ 'campaign.campaign.resourceName': resourceName }, { $push: { excludeIp: { ip:currentip, status: true } } });


        return res.status(200).json({ status: true, result: exclude.data.results });

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = ExcludeIp;