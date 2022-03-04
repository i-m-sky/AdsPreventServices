const { google } = require('googleapis');
const Subscription = require("../../model/Subscription");
const GoogleAdWord = require("../../model/GoogleAdWord")
const axios = require('axios')

const SetupGoogleAds = async (req, res) => {

    try {

        const oauth2Client = new google.auth.OAuth2(

            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_CALLBACK_URL

        );
        const code = req.body.code;

        const { tokens } = await oauth2Client.getToken(code)

        oauth2Client.setCredentials(tokens);

        const accessToken = tokens.access_token
        const refreshToken = tokens.refresh_token

        if(!refreshToken){
            return res.status(200).json({ status: false, message:"Google google ads account already linked" })
        }

        console.log("AccessToken: ", accessToken, "RefreshToken: ", refreshToken)

        const allcustomers = await axios.get(`https://googleads.googleapis.com/v10/customers:listAccessibleCustomers`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN
            }
        });

        let endpoints = [];

        for (let i = 0; i < allcustomers.data.resourceNames.length; i++) {

            endpoints.push(`https://googleads.googleapis.com/v9/${allcustomers.data.resourceNames[i]}`)

        }

        console.log("urls", endpoints)

        const account = []

        for (let i = 2; i < endpoints.length; i++) {
            const customers = await axios.get(endpoints[i], {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN
                }
            });

            account.push(customers.data)

        }
        const data = new GoogleAdWord({
            userId: req.user.id,
            refresh_Token: refreshToken
        })

        const result = await data.save();
        console.log(result)


        return res.status(200).json({ status: true, accounts: account,accessToken,refreshToken })

    } catch (error) {
        return res.status(200).json(error.message);
    }

}

module.exports = SetupGoogleAds;
