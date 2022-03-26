const Countrie = require("../../model/Countries");
const SearchCountry = async(req,res)=>{
    try {
      const {Country} = req.body;
      if(!Country){
          return res.status(200).json("Country must be set req body")
      }
      const count = Country.charAt(0).toUpperCase() + Country.slice(1);
      const count2 = Country.toUpperCase()
      const result = await Countrie.find({$or:[{name:count},{iso3:count2},{iso2:count2}]})
      if(result.length > 0 ){
        return res.status(200).json({status:true,Countries:result})
      }
      return res.status(200).json({status:false})
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = SearchCountry;