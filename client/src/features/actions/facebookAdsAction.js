import { PostApi } from "../../services/Services";
import { FACEBOOK_ADS_REQUEST,
        FACEBOOK_ADS_SUCCESS,
        FACEBOOK_ADS_FAIL
 } from "../actions-types"; 



 const facebookAdsAction = async(facebookAdsId,access_token) => (dispatch)=>{
    PostApi(`/setupfacebook`,{facebookAdsId,access_token}).then((data)=>{
        console.log("data",data)
    })
 }

export default facebookAdsAction;