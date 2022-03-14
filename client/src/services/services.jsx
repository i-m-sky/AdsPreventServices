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
    static GoogleAdsSetup(code) {
        return instance.post('/google-setupads', { code });
    }

    static SendManagerId(id, refreshToken) {
        return instance.post(`/google-managerid`, { managerId: id, refreshToken })
    }

    static SendClientId(managerId, clientId, refreshToken) {
        return instance.post('/google-client', { managerId, clientId, refreshToken })
    }
    static detectedips() {
        return instance.get('/detectedips');
    }
    static ExcludeIp(ip,result,resourceName) {
        return instance.post(`/exclude-ip`,{
            ip:ip,
            account:result,
            resourceName
        })
    }
    static getCampaigns(GoogleAdsId){
        return instance.post(`/getcampaigns`,{GoogleAdsId});
    }

}
export const saveGoogleData = (data) => {
    localStorage.setItem("googleAds", JSON.stringify(data))
}

export default Services;

