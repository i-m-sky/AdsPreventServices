const GoogleAdWord = require("../../model/GoogleAdWord")
const { GoogleAdsApi, enums, OnQueryStart } = require('google-ads-api')
const GoogleClient = async (req, res) => {
  
  try {

    const managerId = req.body.managerId;
    const clientId = req.body.clientId;

    const data = await GoogleAdWord.find({ manager_id: managerId })

    const refreshToken = data[0].refresh_Token;

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
    })

    const customer = client.Customer({
      customer_id: clientId,
      login_customer_id: managerId,
      refresh_token: refreshToken,
    });


    const report = await customer.report({
      entity: "campaign",
      attributes: [
        "campaign.id",
        "campaign.name",
        "campaign.bidding_strategy_type",
        "campaign_budget.amount_micros",
      ],
      metrics: [
        "metrics.cost_micros",
        "metrics.clicks",
        "metrics.impressions",
        "metrics.all_conversions",
      ],
      constraints: {
        "campaign.status": enums.CampaignStatus.ENABLED,
      },
      limit: 20,
    });

    await GoogleAdWord.update({ manager_id: managerId }, { $set: { customer_id: clientId } })

    const GoogleClient = await GoogleAdWord.find({ manager_id: managerId })
    return res.status(200).json({ status: true, GoogleClient });

  } catch (error) {
    return res.status(200).json({ status: false, message: error.message })
  }
}
module.exports = GoogleClient;