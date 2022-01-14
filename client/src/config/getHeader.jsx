
const getheader = ()=>{
    const token = JSON.parse(localStorage.getItem("user_details")).token;
    const header = {
        
        headers: {"auth-token" : token}  
    }
    return header;
}

export default getheader;