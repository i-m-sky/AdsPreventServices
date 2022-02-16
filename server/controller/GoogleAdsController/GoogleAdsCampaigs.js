
const GoogleRefreshToken = require("../../model/GoogleRefreshToken");
const { GoogleAdsApi ,enums} = require('google-ads-api')

const GoogleAdsCampaigs = async (req, res) => {
    try {

        // const userid = req.user.id;
        // const data = await GoogleRefreshToken.find({ userId: userid })
        // console.log(data)

        const client = new GoogleAdsApi({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
        })

        const refreshToken = '1//0gqJi-LTtDHKqCgYIARAAGBASNwF-L9IrvWLv-EtSo16y-veyPUAA1-sl0whqUeWQA2jHpZ98LfS2rx27h0lmq4qbkczQ4YXWCQc'

            //1//0gnwDRB98N0XgCgYIARAAGBASNwF-L9Ir52e2EOIDyGPLnpbRt-msWHsvqvj0PBEz0dAbSQh5a29LbxkVDeGc9-c8WlmlegRua8w
        const customers = await client.listAccessibleCustomers(refreshToken);
        console.log(customers)
        // const login_customerId = customers.resource_names[0].split('/')[1]

        // console.log("Login_customer_id: ", login_customerId)
        
        // const customer = client.Customer({
        //     customer_id: "7465354499", //"7465354499",  //"5364102549",
        //     login_customer_id:"5364102549",
        //     refresh_token: refreshToken,
        //   });

        //   //manager_account_id = 5364102549
        //   //client_customer_id = 7465354499 first
        //   //client_customer_id = 2715332564 second


        //   const campaigns = await customer.report({
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
          
        // console.log(campaigns)
        // return res.status(200).json(campaigns)

    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message)
    }
}

module.exports = GoogleAdsCampaigs;

//ya29.A0ARrdaM9uYxtmQH8vu_E58xIBOk5FiuEP0gkRkzEc8Tvz507RRleiuNt8RmAx6J4R2l55AC5lebgKMSft3aWRSjAhsAVT3JFc6GbJ1TNZDVW96DycSV8oWV1txi9PRxH-UdeejFGn_uB1pUc6_H2LQm1V1n_6