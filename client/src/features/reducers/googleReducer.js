import {
    GOOGLE_ADS_REQUEST,
    GOOGLE_ADS_SUCCESS,
    GOOGLE_ADS_FAIL,
    CLEAR_ERROR
} from '../actions-types';

const googleDataFromStorage = localStorage.getItem("googleAds")
    ? JSON.parse(localStorage.getItem("googleAds"))
    : null;

const initialState = {
    loading: false,
    googleAccount: googleDataFromStorage,
    googleError: null
}
export const googleReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case
            GOOGLE_ADS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case
            GOOGLE_ADS_SUCCESS:
            return {
                ...state,
                loading: false,
                googleAccount: payload,
                googleError: null
            };
        case
            GOOGLE_ADS_FAIL:
            return {
                ...state,
                loading: false,
                googleAccount: null,
                googleError: payload
            }
        case
            CLEAR_ERROR:
            return {
                ...state,
                googleError: null
            }
        default:
            return state;
    }
}
