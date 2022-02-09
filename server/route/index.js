const route = require("express").Router()
const auth = require("../middleware/auth")
const authController = require("../controller/authController");
const accountController = require("../controller/accountController");
const googleAdsController = require("../controller/GoogleAdsController");
const ipController = require("../controller/ipController")

//main routes
route.post('/auth/register',authController.localRegister);
route.post('/auth/login',authController.localLogin);
route.post('/domain',auth,accountController.addDomain);


//google ads
route.post('/google/ads',googleAdsController.connection);

//google auth
route.post('/auth/google',authController.googleOauth);

//facebook auth
route.post('/auth/facebook',authController.facebookOauth);


//Ip routes

route.get('/spamhausip',ipController.SpamhausIp);
route.get('/myip-ms',ipController.myip);

module.exports = route;
