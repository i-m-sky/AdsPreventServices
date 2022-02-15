const { google } = require('googleapis');
const GoogleRefreshToken = require("../../model/GoogleRefreshToken")

const GoogleToken = async (req, res) => {



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



        if (tokens.refresh_token) {

            const exist = await GoogleRefreshToken.exists({ userId: req.user.id });

            if (exist) {
                return res.status(200).json({ status: false, message: "Already exist" });
            }

            const data = new GoogleRefreshToken({
                userId: req.user.id,
                refresh_Token: tokens.refresh_token
            });

            const result = await data.save();
            console.log(result);

            return res.status(200).json({ LinkGoogle: true })
        }
        return res.status(200).json({ LinkGoogle: true })

    } catch (error) {
        return res.status(200).json('opps something went wrong')
    }


}

module.exports = GoogleToken;