import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERROR
} from '../actions-types';

const userDataFromStorage = localStorage.getItem("user_data")
  ? JSON.parse(localStorage.getItem("user_data"))
  : null;

const initialState = {
    loading: false,
    user:userDataFromStorage,
    error:null
}
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case
            AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case
            AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                error:null
            };
        case
            AUTH_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
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
