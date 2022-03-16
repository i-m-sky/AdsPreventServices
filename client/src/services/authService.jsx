import instance from "../http/axios"

class authService{
    static register(name,email,password,domain){
       return instance.post(`/auth/register`,{name,email,password,domain})
    }
    static login(email,password){
        return instance.post(`/auth/login`,{email,password})
    }
    static LoginWithGoogle (googleData){
        return instance.post(`/auth/google`,{ token:googleData.tokenId });
    }
    static LoginWithFacebook (accessToken,userId){
        return instance.post(`/auth/facebook`,{accessToken,userId});
    }
  
}

//save token in browser's  localstorage
export const saveToken = (data)=>{
    localStorage.setItem("user_data",JSON.stringify(data))
}
export const deleteToken = ()=>{
   return localStorage.removeItem("user_data")
}

export default authService;