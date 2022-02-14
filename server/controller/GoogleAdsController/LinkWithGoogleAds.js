const { GoogleAdsApi } = require("google-ads-api")
const { google } = require('googleapis');
const route = require("express").Router;

const LinkWithGoogleAds = async (req, res) => {

    try {

        const oauth2Client = new google.auth.OAuth2(

            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_CALLBACK_URL
            
        );

        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/adwords'
        });

       return res.json({url,status:true});

    } catch (error) {
        return res.json("opps somethig went wrong")
    }

}

module.exports =  LinkWithGoogleAds;