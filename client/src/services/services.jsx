import axios from "axios";
import instance from "../http/axios";
import getheader from '../config/getHeader';

class Services {

    static LinkWithGoogle () {

        return instance.get(`google-ads`)
      
    }
    static SendGoogleData(code){
        return axios.post(`google-code`,{
           'code':code
        });
    }
  
  

}

export default Services;
