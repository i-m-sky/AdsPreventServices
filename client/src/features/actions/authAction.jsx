import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERROR
} from '../actions-types';

import authService from '../../services/authService';
import { saveToken } from '../../services/authService';
//login Action
export const loginAction = ({email,password}) => async(dispatch)=>{
   
    dispatch({type:AUTH_REQUEST})
    try {
    const res = await authService.login(email,password)
    
    if(res.data.status===true){

        //after geting response from api call saveToken function.
        saveToken(res.data.user);
        dispatch({type:AUTH_SUCCESS,payload:res.data.user})
    }
    else{ dispatch({type:AUTH_FAIL,payload:res.data.message}); }

    } catch (error) {   
        dispatch({type:AUTH_FAIL,payload:"something went wrong"}) 
    }
}

//register 
export const registerAction = ({name,email,password,domain})=> async(dispatch)=>{

        dispatch({type:AUTH_REQUEST});
    
    try {
        const res = await authService.register(name,email,password,domain);
      
        if(res.data.status === true){
            dispatch({type:AUTH_SUCCESS,payload:res.data.user});
            saveToken(res.data.user)
        }
        else{ dispatch({type:AUTH_FAIL,payload:res.data.message})}  
       

    }catch (error) {
        dispatch({type:AUTH_FAIL,payload:'Something went wrong'})
    } 
}

//clear error
export const clearError = ()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERROR});
}