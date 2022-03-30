import instance from "../http/axios";

export const PostApi = async(url,data)=>{
    try {
        let result = await instance.post(url,data)
            return result.data
    } catch (error) {
        if(error){
            return error
        }
    }
}

export const GetApi = async(url)=>{
    try {
        let result = await instance.get(url)
        return result.data;
    } catch (error) {
        if(error){
            return error
        }
    }
}

export const saveToken = (data) => {
    localStorage.setItem("user_data", JSON.stringify(data))
}
export const deleteToken = () => {
    localStorage.removeItem("googleAds")
    localStorage.removeItem("facebookAds")
    return localStorage.removeItem("user_data")
}
export const deleteFacebook = () => {
    return  localStorage.removeItem("facebookAds")
}

export const saveGoogleData = (data) => {
    localStorage.setItem("googleAds", JSON.stringify(data))
}
export const saveFacebookData = (data)=>{
    localStorage.setItem("facebookAds", JSON.stringify(data))
}