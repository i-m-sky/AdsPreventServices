import {
    FACEBOOK_ADS_REQUEST,
    FACEBOOK_ADS_SUCCESS,
    FACEBOOK_ADS_FAIL
} from '../actions-types';

const facebookDataFromStorage = localStorage.getItem("user_data")
  ? JSON.parse(localStorage.getItem("user_data"))
  : null;

const initialState = {
    loading: false,
    facebookAds:facebookDataFromStorage,
    error:null
}
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case
        FACEBOOK_ADS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case
        FACEBOOK_ADS_SUCCESS:
            return {
                ...state,
                loading: false,
                facebookAds: payload,
                error:null
            };
        case
        FACEBOOK_ADS_FAIL:
            return {
                ...state,
                loading: false,
                facebookAds: null,
                error: payload
            }
        default:
            return state;
    }
}
