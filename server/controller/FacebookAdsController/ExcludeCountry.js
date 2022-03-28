
const axios = require("axios")
const FormData = require('form-data');
const ExcludeCountry = async(req,res)=>{
   try {
    const {iso2} = req.body;
    if(!iso2){
        return res.status(200).json("iso2 must be set in body !");   
    }
    const form = new FormData();
    form.append('targeting', `{"excluded_geo_locations": {"regions": []},"geo_locations": {"countries": ["${iso2}"]}}`);
    form.append('access_token', "EAAJjbBz7b7YBAIyRZB3pSC8YvdgszopyL0gZCFZCnun9Wkxvg53FLaWehIgJOXYBEww5L59lqyZAU2yspS6fBICxEsnpcuZAGkDR7PoHpRgK7V9zgIZBh4Nk7CKtA3YKBgYL81JQTdzP9vcUFX7ZBUX7krrogb5BFV6GsUnY355Qiz5OL1tN8BGyAd6eUrAqI4ZD");

    //blcok country from facebook campaign

     const excludeCountry = await axios.post(`https://graph.facebook.com/v13.0/120330000198647101`,form,
     { headers: form.getHeaders() })

     console.log("excludeCountry",excludeCountry.data)

     return res.status(200).json({status:true});
   } catch (error) {
       return res.status(500).json(error)
   }
}
module.exports = ExcludeCountry;