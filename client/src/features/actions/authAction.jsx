import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERROR
} from '../actions-types';

import { PostApi,saveToken } from '../../services/Services';
//login Action
export const loginAction = ({ email, password }) => async (dispatch) => {

    PostApi('/auth/login', { email, password }).then(data => {

        if (data.status === true) {
            saveToken(data.user);
            dispatch({ type: AUTH_SUCCESS, payload: data.user });
        } else {
            dispatch({ type: AUTH_FAIL, payload: data.message });
        }
    }).catch(e => {
        dispatch({ type: AUTH_FAIL, payload: "Something went wrong" })
    });

}

//register 
export const registerAction = ({ name, email, password, domain }) => async (dispatch) => {

    PostApi('/auth/register', { name,email, password,domain}).then(data => {

        if (data.status === true) {
            saveToken(data.user);
            dispatch({ type: AUTH_SUCCESS, payload: data.user })
        } else {
            dispatch({ type: AUTH_FAIL, payload: data.message })
        }
    }).catch(e => {
        dispatch({ type: AUTH_FAIL, payload: "Something went wrong" })
    });
}

//clear error
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
}