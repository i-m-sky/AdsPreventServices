import { PostApi } from "../../services/Services";
import { saveGoogleData } from "../../services/Services";
import {
    GOOGLE_ADS_REQUEST,
    GOOGLE_ADS_SUCCESS,
    GOOGLE_ADS_FAIL
} from "../actions-types";

const googleAdsAction =  (managerId, clientId, refreshToken) => async(dispatch) => {
    console.log("call",managerId,clientId,refreshToken)
    dispatch({ type: GOOGLE_ADS_REQUEST })
    PostApi(`google-client`, { managerId, clientId, refreshToken }).then((data) => {
        if (data.status === true) {
            saveGoogleData(data)
            dispatch({ type: GOOGLE_ADS_SUCCESS, payload: data });
        } else if (data.status === false) {
            alert("Invalid Client id")
        }
    }).catch(e => {
        dispatch({ type: GOOGLE_ADS_FAIL, payload: "Something went wrong" })
    });
}

export default googleAdsAction;