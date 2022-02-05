const route = require("express").Router()
const auth = require("../middleware/auth")
const authController = require("../controller/authController");
const accountController = require("../controller/accountController");


//main routes
route.post('/auth/register',authController.localRegister);
route.post('/auth/login',authController.localLogin);
route.post('/domain',auth,accountController.addDomain);

//google auth
route.post('/auth/google',authController.googleOauth);

module.exports = route;
