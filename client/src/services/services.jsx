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

    static SendManagerId(id){
        return instance.post(`/google-managerid`,{managerId:id})
    }
  
  

}

export default Services;

