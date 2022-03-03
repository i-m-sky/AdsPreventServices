import Services, { saveGoogleData } from "../../services/services"

const AD_REQUEST = 'AD_REQUEST'
const AD_SUCCESS = 'AD_SUCCESS'
const AD_FAIL = 'AD_FAIL'

export const googleAction = (id,clientid,refreshToken) => async(dispatch)=>{
    console.log("ManagerId: ",id,"clientid: ",clientid)
    dispatch({type:AD_REQUEST})
    try {
      const res = await Services.SendClientId(id,clientid,refreshToken)
    console.log("googleads data",res)
    // if(res.data.status===true){
    //     saveGoogleData(res.data)
    //     dispatch({type:AD_SUCCESS,payload:res.data})
    // }
    // else{ dispatch({type:AD_FAIL,payload:res.data.message}); }

    } catch (error) {   
        dispatch({type:AD_FAIL,payload:"something went wrong"}) 
    }
}
