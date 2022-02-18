const { google } = require('googleapis');
const GoogleRefreshToken = require("../../model/GoogleRefreshToken")
const { GoogleAdsApi } = require('google-ads-api')

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

        oauth2Client.on('tokens', (tokens) => {
            if (tokens.refresh_token) {
                console.log(tokens.refresh_token);
            }
            console.log(tokens.access_token);
        });

        console.log("access_token: ", tokens.access_token);
        console.log("refresh_token: ", tokens.refresh_token);

        const client = new GoogleAdsApi({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            developer_token: process.env.GOOGLE_DEVELOPER_TOKEN,
        })


        const customers = await client.listAccessibleCustomers(tokens.refresh_token);
       
        const allcustomer = []
        for (let i = 0; i < customers.resource_names.length; i++) {
            let customerlist = customers.resource_names[i].split('/');
            allcustomer.push(customerlist[1]);
        }
        console.log(allcustomer)

        if(allcustomer.length >= 1 ){

            if(tokens.refresh_token){
                const data = new GoogleRefreshToken({
                    userId: req.user.id,
                    refresh_Token: tokens.refresh_token
                });
    
                const result = await data.save();
                console.log(result);
                return res.status(200).json(allcustomer);
            }
            return res.status(200).json(allcustomer);
        }
        
            return res.status(200).json("No google ads account available")
        
      
    } catch (error) {
        return res.status(200).json(error)
    }

}

module.exports = SetupGoogleAds;