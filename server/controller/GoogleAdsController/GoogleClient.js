const GoogleAdWord = require("../../model/GoogleAdWord")
const axios = require("axios")
const FormData = require('form-data');

const GoogleClient = async (req, res) => {

  try {

    const {managerId,clientId,refreshToken} = req.body;
   
    const data = await GoogleAdWord.find({ refresh_Token: refreshToken });

    const form = new FormData();
    form.append('client_id', process.env.GOOGLE_CLIENT_ID);
    form.append('client_secret', process.env.GOOGLE_CLIENT_SECRET);
    form.append('grant_type', 'refresh_token');
    form.append('refresh_token', refreshToken);


    const generateAccesstoken = await axios.post(`https://oauth2.googleapis.com/token?access_type=offline`, form,
      { headers: form.getHeaders() })


    console.log("accesstoken",generateAccesstoken);

    const camp = await axios.post(`https://googleads.googleapis.com/v9/customers/${clientId}/googleAds:search`, {

      "query": "SELECT campaign.id, campaign.name, campaign.status, campaign.serving_status FROM campaign"

    }, {
      headers: {
        "Authorization": `Bearer ${generateAccesstoken.data.access_token}`,
        "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
        "login-customer-id": managerId
      }
    })

    console.log("campaigns: ", camp)

    await GoogleAdWord.updateOne({ refresh_Token: refreshToken }, { $set: { customer_id: clientId } })
    const result = await GoogleAdWord.findOne({ refresh_Token: refreshToken })
    return res.status(200).json({ status: true, result })

  } catch (error) {
    return res.status(200).json({ status: false, message: error.message })
  }
}
module.exports = GoogleClient;