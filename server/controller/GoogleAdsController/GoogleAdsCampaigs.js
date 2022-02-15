
const GoogleRefreshToken = require("../../model/GoogleRefreshToken");
const {GoogleAdsApi} = require('google-ads-api')

const GoogleAdsCampaigs = async (req, res) => {
    try {


        const userid = req.user.id;
        const data = await GoogleRefreshToken.find({ userId: userid })
        const refresh_Token = data[0].refresh_Token

        const client = new GoogleAdsApi({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
        })

        const customer = client.Customer({
            customer_account_id:'227-936-3686',// '321-905-5209',
            refresh_token: '1//0gOkbkKkRPqRrCgYIARAAGBASNwF-L9IrncMst8DSRGTxdJ8FRzgeFjAct9L2sxZ5rasWD1-07d0N7zsROq02rIV7vc6RXSyoQjU',
        })
        

        console.log(customer.campaigns);
        const campaigns = await customer.query(`
        SELECT 
          campaign.name, campaign.status
        FROM 
          campaign
    `);
    console.log(campaigns);

    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message)
    }
}

module.exports = GoogleAdsCampaigs;

//ya29.A0ARrdaM9uYxtmQH8vu_E58xIBOk5FiuEP0gkRkzEc8Tvz507RRleiuNt8RmAx6J4R2l55AC5lebgKMSft3aWRSjAhsAVT3JFc6GbJ1TNZDVW96DycSV8oWV1txi9PRxH-UdeejFGn_uB1pUc6_H2LQm1V1n_6