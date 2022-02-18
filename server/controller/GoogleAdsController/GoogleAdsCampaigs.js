
const GoogleRefreshToken = require("../../model/GoogleRefreshToken");
const { GoogleAdsApi, enums } = require('google-ads-api')

const GoogleAdsCampaigs = async (req, res) => {
  try {

    
    const data = await GoogleRefreshToken.findOne({ userId:  req.user.id })

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
    })

    const customer = client.Customer({
      customer_id: "3219055209",
      login_customer_id: '2279363686', 
      refresh_token: refreshToken,
    });

    const campaigns = await customer.campaigns.list();

    console.log("campaigns: ", campaigns)
    return res.json(campaigns)
  


    //   const report = await customer.report({
    //     entity: "campaign",
    //     attributes: [
    //       "campaign.id",
    //       "campaign.name",
    //       "campaign.bidding_strategy_type",
    //       "campaign_budget.amount_micros",
    //     ],
    //     metrics: [
    //       "metrics.cost_micros",
    //       "metrics.clicks",
    //       "metrics.impressions",
    //       "metrics.all_conversions",
    //     ],
    //     constraints: {
    //       "campaign.status": enums.CampaignStatus.ENABLED,
    //     },
    //     limit: 20,
    //   });

    // console.log(report)
    // return res.status(200).json(report)

  } catch (error) {
    return res.status(200).json(error)
  }
}

module.exports = GoogleAdsCampaigs;
