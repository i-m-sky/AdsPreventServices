const GoogleAdWord = require("../../model/GoogleAdWord")
const axios = require("axios");
const FormData = require('form-data');
const Subscription = require("../../model/Subscription");
const GoogleCampaign = require('../../model/GoogleCampaign');

const GoogleClient = async (req, res) => {

  try {
     console.log("Google client",req.body)
    const { managerId, clientId, refreshToken } = req.body;

    console.log(req.body)

    if (!managerId && !clientId && !refreshToken) {
      return res.status(401).json("Bad request ! clientId, managerId and refreshToken required")
    }

    const form = new FormData();
    form.append('client_id', process.env.GOOGLE_CLIENT_ID);
    form.append('client_secret', process.env.GOOGLE_CLIENT_SECRET);
    form.append('grant_type', 'refresh_token');
    form.append('refresh_token', refreshToken);


    const generateAccesstoken = await axios.post(`https://oauth2.googleapis.com/token?access_type=offline`, form,
      { headers: form.getHeaders() });

      console.log("accesstoken",generateAccesstoken.data)

    const camp = await axios.post(`https://googleads.googleapis.com/v9/customers/${clientId}/googleAds:search`, {

      "query": "SELECT campaign.id, campaign.name, campaign.status, campaign.serving_status FROM campaign"

    },{
      headers: {
        "Authorization": `Bearer ${generateAccesstoken.data.access_token}`,
        "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
        "login-customer-id": managerId
      }
    });

   

    const subscription = new Subscription({
      userId: req.user.id,
      lastProcess: new Date().setDate(new Date().getDate()),
      nextPayment: new Date().setDate(new Date().getDate() + 7),
      status: true
    });

    const subs = await subscription.save();

    const data = new GoogleAdWord({
      subsId: subs._id,
      refresh_Token: refreshToken,
      manager_id: managerId,
      customer_id: clientId,
    });

    const result = await data.save();


    for(let i = 0; i < camp.data.results.length; i++) {
      const schema = new GoogleCampaign({
        GoogleAdId: result._id,
        campaign: camp.data.results[i]
      });
      await schema.save();
    }

    return res.status(200).json({ status: true, result })

  } catch (error) {
    return res.status(500).json({ status: false, message: error.message })
  }
}
module.exports = GoogleClient;