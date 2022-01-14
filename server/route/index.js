const route = require("express").Router()
const auth = require("../middleware/auth")
const authController = require("../controller/authController");
const accountController = require("../controller/accountController");
const test = require("../controller");


route.post('/auth/register',authController.localRegister);
route.post('/auth/login',authController.localLogin);

route.post('/domain',auth,accountController.addDomain);

route.get("/test",test);

module.exports = route;
