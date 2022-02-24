import { combineReducers } from "redux";
import {authReducer} from './authReducer';
import { googleReducer } from "./googleReducer";


export const reducer = combineReducers({
    authReducer,
    googleReducer
   
})