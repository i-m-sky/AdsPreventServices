const GoogleAdWord = require("../../model/GoogleAdWord")
const { GoogleAdsApi, enums, OnQueryStart } = require('google-ads-api')

const GoogleCampaignCriteria = async(req,res)=>{
    try {
        const result = await GoogleAdWord.find({manager_id:"2279363686"})

        console.log(result)
        const client = new GoogleAdsApi({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
          })
      
          const customer = client.Customer({
            customer_id: result[0].customer_id,
             login_customer_id: result[0].manager_id,
            refresh_token: result[0].refresh_Token,
          });

          const response = await customer.report({
            entity: 'ad_group', 
            attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'], 
            metrics: ['metrics.clicks'],
            segments: ['segments.date'], 
            constraints: { 'ad_group.status': enums.AdGroupStatus.ENABLED }, 
            from_date: '2019-01-01', 
            order_by: 'metrics.clicks', 
            sort_order: 'ASC',
            limit: 5, 
        })

          console.log(response)
          
          return res.json(response)

          // const report = await customer.report({
          //   entity: "campaign",
          //   attributes: [
          //     "campaign.id",
          //     "campaign.name",
          //     "campaign.bidding_strategy_type",
          //     "campaign_budget.amount_micros",
            
          //   ],
          //   metrics: [
          //     "metrics.cost_micros",
          //     "metrics.clicks",
          //     "metrics.impressions",
          //     "metrics.all_conversions",
          //   ],
          //   constraints: {
          //     "campaign.status": enums.CampaignStatus.ENABLED,
          //   },
          //   limit: 20,
          // });

          // return res.json(report)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = GoogleCampaignCriteria;