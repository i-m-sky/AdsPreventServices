import { PostApi } from "../../services/Services";
import { saveGoogleData } from "../../services/Services";
import {
    GOOGLE_ADS_REQUEST,
    GOOGLE_ADS_SUCCESS,
    GOOGLE_ADS_FAIL,
    CLEAR_ERROR
} from "../actions-types";

export const clearGoogleError = () => async (dispatch) => {
    console.log("hello")
    dispatch({ type: CLEAR_ERROR });
}

export const googleAdsAction = (managerId, clientId, refreshToken) => async (dispatch) => {
    dispatch({ type: GOOGLE_ADS_REQUEST })
    PostApi(`google-client`, { managerId, clientId, refreshToken }).then((data) => {
        if (data.status === true) {
            saveGoogleData(data.result)
            dispatch({ type: GOOGLE_ADS_SUCCESS, payload: data.result });
        } else {
            dispatch({ type: GOOGLE_ADS_FAIL, payload: data.message });
        }
    }).catch(e => {
        dispatch({ type: GOOGLE_ADS_FAIL, payload: "Something went wrong" });
    });
}
