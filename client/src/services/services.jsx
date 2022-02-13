import axios from "axios";
import instance from "../http/axios";

class Services {

    static LinkWithGoogle(scope,code,state) {

        return axios.post(`https://oauth2.googleapis.com/token`,
            `code=${code}&redirect_uri=http://localhost:3000/google/redirect&client_id=${state}&client_secret=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&grant_type=authorization_code`, {
            headers: {
                'content-type':'application/x-www-form-urlencoded',
            }
        })    
    }
    static SendGoogleData(res){
        return instance.post(`/google-ads`,{res})
    }

  

}

export default Services;

