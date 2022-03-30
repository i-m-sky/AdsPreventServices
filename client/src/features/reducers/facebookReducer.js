import {
    FACEBOOK_ADS_REQUEST,
    FACEBOOK_ADS_SUCCESS,
    FACEBOOK_ADS_FAIL,
    CLEAR_ERROR
} from '../actions-types';

const FacebookDataFromStorage = localStorage.getItem("facebookAds")
  ? JSON.parse(localStorage.getItem("facebookAds"))
  : null;

const initialState = {
    loading: false,
    facebookAccount:FacebookDataFromStorage,
    error:null
}
export const facebookReducer = (state = initialState, { type, payload }) => {
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
                facebookAccount: payload,
                error:null
            };
        case
        FACEBOOK_ADS_FAIL:
            return {
                ...state,
                loading: false,
                facebookAccount: null,
                error: payload
            }
        case
            CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
