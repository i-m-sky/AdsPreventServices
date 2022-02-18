const route = require("express").Router()
const auth = require("../middleware/auth")
const authController = require("../controller/authController");
const accountController = require("../controller/accountController");
const googleAdsController = require("../controller/GoogleAdsController");
const ipController = require("../controller/ipController")
const refreshtoken = require("../controller/GoogleAdsController/refreshToken")


//main routes
route.post('/auth/register', authController.localRegister);
route.post('/auth/login', authController.localLogin);
route.post('/domain', auth, accountController.addDomain);



//google ads
route.post('/google-setupads',auth, googleAdsController.SetupGoogleAds);
route.get('/google-campaigs',googleAdsController.GoogleAdsCampaigs);
route.post('/google-create-campaign',auth,googleAdsController.CreateCampaigs);
route.post('/google-managerid',auth,googleAdsController.GetManagerId);

route.get('/url',refreshtoken)


//google auth
route.post('/auth/google', authController.googleOauth);

//facebook auth
route.post('/auth/facebook', authController.facebookOauth);


//Ip routes
route.get('/spamhausip', ipController.SpamhausIp);
route.get('/myip-ms', ipController.myip);

module.exports = route;


