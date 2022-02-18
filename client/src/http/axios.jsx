import axios from "axios";

const instance = axios.create({

  baseURL: 'http://localhost:8000'
});


instance.interceptors.request.use(function (config) {
  document.body.classList.add('loading-indicator');
  if (localStorage.getItem("user_data") !== null) {
    const token = `Bearer ${JSON.parse(localStorage.getItem("user_data")).token}`;
    config.headers.authorization = token;
  }
  return config;

}, function (error) {

  return Promise.reject(error);
  
});


instance.interceptors.response.use(function (response) {
  document.body.classList.remove('loading-indicator');
  return response;
}, function (error) {

  return Promise.reject(error);
});


export default instance;