
const AD_REQUEST = 'AD_REQUEST'
const AD_SUCCESS = 'AD_SUCCESS'
const AD_FAIL = 'AD_FAIL'

const googleDataFromStorage = localStorage.getItem("googleAds")
  ? JSON.parse(localStorage.getItem("googleAds").status)
  : false;


const initialState = {
    status:googleDataFromStorage,
    error:null
}
export const googleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case
            AD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case
            AD_SUCCESS:
            return {
                ...state,
                loading: false,
                status:true,
                error:null
            };
        case
            AD_FAIL:
            return {
                ...state,
                loading: false,
                status:false,
                error: payload
            }
        
        default:
            return state;
    }
}
