const { GoogleAdsApi, enums, OnQueryStart } = require('google-ads-api')

const GoogleAdsCampaigs = async (req, res) => {
  try {

    const client = new GoogleAd({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
    })
    const refreshToken = '1//0gphOrz0rSDKECgYIARAAGBASNwF-L9Iron4-eWWM5T3QY8Le-tDrL0G3WsDsJJpjS_gieTNnmiO7poe5z9z0XUIt3Y9PDU8oJCo'



    const customers = await client.listAccessibleCustomers(refreshToken);

    console.log(customers)
    return res.json(customers)
    // const customer = client.Customer({
    //   customer_id: "3219055209",
    //   login_customer_id: '2279363686', 
    //   refresh_token: refreshToken,
    // });


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
    return res.status(200).json(error.message)
  }
}

module.exports = GoogleAdsCampaigs;
