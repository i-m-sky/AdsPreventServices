const GoogleAdWord = require("../../model/GoogleAdWord")
const axios = require("axios")
const GoogleClient = async (req, res) => {
  
  try {

    const managerId = req.body.managerId;
    const clientId = req.body.clientId;
    const refreshToken = req.body.refreshToken;

    console.log("managerid: ",managerId, "clientId: ",clientId,"refreshToken: ",refreshToken)
    // const data = await GoogleAdWord.find({ manager_id: managerId });
    // console.log(data)

  //  const generateAccesstoken = axios.get(`https://googleads.googleapis.com/v10/customers/${clientid}/googleAds:search`)

    // await GoogleAdWord.update({ manager_id: managerId }, { $set: { customer_id: clientId } })

    // const GoogleClient = await GoogleAdWord.find({ manager_id: managerId })
    // return res.status(200).json({ status: true, GoogleClient });

  } catch (error) {
    return res.status(200).json({ status: false, message: error.message })
  }
}
module.exports = GoogleClient;