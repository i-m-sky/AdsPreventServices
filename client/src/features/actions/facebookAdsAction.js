import { PostApi } from "../../services/Services";
import { saveFacebookData } from "../../services/Services";
import { FACEBOOK_ADS_REQUEST,
        FACEBOOK_ADS_SUCCESS,
        FACEBOOK_ADS_FAIL
 } from "../actions-types"; 

 const facebookAdsAction = async(facebookAdsId,access_token) => (dispatch)=>{
    dispatch({type:FACEBOOK_ADS_REQUEST})
       PostApi(`/setupfacebook`, { access_token, account_id: facebookAdsId }).then((data) => {
            console.log("this token",access_token)
            if (data.status === true) {
                saveFacebookData(data);
                dispatch({type:FACEBOOK_ADS_SUCCESS,payload:data})
                // navigate('/dashboard/fraudanalytics/facebook');
            }  else {
                dispatch({ type: FACEBOOK_ADS_FAIL, payload: data.message });
            }
        }).catch(e => {
                dispatch({ type: FACEBOOK_ADS_FAIL, payload: "Something went wrong" })
        });
 }

export default facebookAdsAction;