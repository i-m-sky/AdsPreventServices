
const axios = require("axios");

const FormData = require('form-data');
const ExcludeCountry = async(req,res)=>{
   try {
    const {iso2,adId,access_token} = req.body;

    console.log(iso2,adId,access_token)
    if(!iso2 || !adId || !access_token ){
        return res.status(200).json("iso2, adId and access_token must be set in body !");   
    }

    const form = new FormData();
  
    // {"excluded_geo_locations": {"regions": [{"key": "3847"}]},"geo_locations": {"countries": ["US"]},"facebook_positions": ["feed"]}
    form.append('targeting []', `{"excluded_geo_locations": {"regions": [{"key": "3847"}]},"geo_locations": {"countries": [${iso2}] }}`);
    form.append('access_token', `${access_token}`);

    // blcok country from facebook campaign

     const excludeCountry = await axios.post(`https://graph.facebook.com/v13.0/${adId}`,form,
     { headers: form.getHeaders() })

     return res.status(200).json({status:true});
   } catch (error) {
       console.log(error)
       return res.status(500).json(error)
   }
}
module.exports = ExcludeCountry;