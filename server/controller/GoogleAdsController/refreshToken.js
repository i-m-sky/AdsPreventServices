const {google} = require('googleapis');


const refreshToken = (req,res)=>{
    

    const oauth2Client = new google.auth.OAuth2(
         process.env.GOOGLE_CLIENT_ID,
         process.env.GOOGLE_CLIENT_SECRET,
         'http://localhost:3000/google-redirect'
        
    );
    
    // generate a url that asks permissions for Blogger and Google Calendar scopes
    const scopes = [
      'https://www.googleapis.com/auth/adword',
      'https://www.googleapis.com/auth/dfp'
    ];
    
    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
    
      // If you only need one scope you can pass it as a string
      scope: scopes
    });
    console.log(url)
}
module.exports = refreshToken