const { GoogleAdsApi, enums, OnQueryStart } = require('google-ads-api')

const GoogleAdsCampaigs = async (req, res) => {
  try {

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
    })
    const refreshToken = '1//0gjwU5L6i8l-1CgYIARAAGBASNwF-L9IrxNd57ftGwSckKJiHaI0iZ8JSDTXl0yXqcEFLtsgn4V3a4lN0zcDMgaoXVrhmQA-O-mg'

    const customer = client.Customer({
      customer_id: "3219055209",
      login_customer_id: '2279363686', 
      refresh_token: refreshToken,
    });

    const campaigns = await customer.query(`
    SELECT 
      campaign.name, campaign.status
    FROM 
      campaign
`)
    
    console.log(campaigns)
    return res.status(200).json(campaigns)

  } catch (error) {
    return res.status(200).json(error.message)
  }
}

module.exports = GoogleAdsCampaigs;
