import axios from "axios";
import {deleteFacebook} from '../services/Services';
import {AUTH_FAIL } from '../features/actions-types';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';



const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});


instance.interceptors.request.use(function (config) {
 
  if (localStorage.getItem("user_data") !== null) {
    const token = `Bearer ${JSON.parse(localStorage.getItem("user_data")).token}`;
    config.headers.authorization = token;
  }
  return config;

}, function (error) {

  return Promise.reject(error);
  
});


let Logout = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  deleteFacebook()
  dispatch({type:AUTH_FAIL});
  navigate('fraudanalytics/facebook')
}

instance.interceptors.response.use(function (response) {
  if(response.data.status===400){
    Logout()
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});


export default instance;