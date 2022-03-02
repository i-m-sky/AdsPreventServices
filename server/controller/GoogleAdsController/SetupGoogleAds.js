const { google } = require('googleapis');
const Subscription = require("../../model/Subscription");
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

        console.log(accessToken, refreshToken)

        const allcustomers = await axios.get(`https://googleads.googleapis.com/v10/customers:listAccessibleCustomers`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN
            }
        });

      

       let endpoints = [];

       for(let i=0 ;i<allcustomers.data.resourceNames.length;i++){

        endpoints.push(`https://googleads.googleapis.com/v9/${allcustomers.data.resourceNames[i]}`)

     }
       
     console.log("urls",endpoints)


     const account = []

      for(let i=0; i<endpoints.length;i++){
        const customers = await axios.get(endpoints[i], {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'developer-token': process.env.GOOGLE_DEVELOPER_TOKEN
            }
        });
       
         account.push(customers.data)
       
     }
     console.log(account)
     return res.status(200).json({status:true,account})

    } catch (error) {
        return res.status(200).json(error.message);
    }

}

module.exports = SetupGoogleAds;
