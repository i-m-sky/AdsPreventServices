
const subscription = require("../../model/Subscription");
const FacebookAds = require("../../model/FacebookAds");
const GetFacebookData = async(req,res)=>{
    try {
        const {access_token,account_id} = req.body;
        console.log(req.body)
     

        if(!access_token || !account_id){
            return res.status(200).json({message:"access_token and account_id must be set in req body"});
        }

        const subscrip = new subscription({
            userId: req.user.id,
            lastProcess: new Date().setDate(new Date().getDate()),
            nextPayment: new Date().setDate(new Date().getDate() + 7),
            status: true
          });

          const subs = await subscrip.save();

          const data =  new FacebookAds({
            subsId: subs._id,
            access_Token:access_token,
            account_id:account_id
          });

          const result = await data.save();
          return res.status(200).json({status:true,result});
          
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = GetFacebookData;    