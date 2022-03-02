import axios from "axios";
import instance from "../http/axios";
import getheader from '../config/getHeader';

class Services {

    static LinkWithGoogle() {

        return instance.get(`google-ads`)

    }
    static SendGoogleData(code) {
        return axios.post(`google-code`, {
            'code': code
        });
    }

    static SendManagerId(id) {
        return instance.post(`/google-managerid`, { managerId: id })
    }

    static SendClientId(managerId, clientId) {
        return instance.post('/google-client', { managerId, clientId })
    }
    static detectedips(){
        return instance.get('/detectedips');
    }
    static blockIp(customerid){
        return axios.post(`/https://googleads.googleapis.com/v10/customers/${customerid}/campaignCriteria:mutate`,{   
        });
    }

}
export const saveGoogleData = (data) => {
    localStorage.setItem("googleAds", JSON.stringify(data))
}

export default Services;

