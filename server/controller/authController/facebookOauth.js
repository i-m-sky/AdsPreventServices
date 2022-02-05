const passport = require('passport');

const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../../model/User")
module.exports = function(){

  passport.use( new FacebookStrategy({
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret :process.env.FACEBOOK_APP_SECRET,
          callbackURL : "http://localhost:3000"
      },
     async function(accessToken, refreshToken, profile, done) {
        await  User.findOne({ email: profile.emails[0].value }, function (err, user) {
              if (err) { return done(err) }
              if (!user) {
                  user = new User({
                      firstname: profile.name.givenName,
                      lastname: profile.name.familyName,
                      email: profile.emails[0].value,
                      providers: {
                          facebook: {
                              id: profile.id,
                              access_token: accessTOken,
                              display_name: displayName,
                              picture: "http://graph.facebook.com/"+profile.id+"/picture?type=square"
                          }
                      }
                  })
                  user.save(function (err) {
                      if (err) console.log(err)
                      return done(err, user)
                  })
              }
              else {
                  return done(err, user)
              }
          })
      }
  ));
};