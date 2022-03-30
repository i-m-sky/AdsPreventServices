import { combineReducers } from "redux";
import {authReducer} from './authReducer';
import { facebookReducer } from "./facebookReducer";
import { googleReducer } from "./googleReducer";

export const reducer = combineReducers({
    authReducer,
    facebookReducer,
    googleReducer
})