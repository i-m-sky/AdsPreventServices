import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import getheader from '../../../config/getHeader';
import instance from '../../../http/axios'
import GoogleClientIdModal from '../../Modals/GoogleClientIdModal';


const GoogleRedirect = () => {

   
    const navigate = useNavigate();

    const code = new URL(window.location.href).searchParams.get('code');

    const [notfound,setNotfound] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [managerId, setManagerId] = useState([]);
    const openModal = ()=>{
        setIsOpen(true)
    }

    const sendValue = async (code) => {
       
        let data = {
            code : code 
        }
       let res = await instance.post('/google-setupads' , data)

       console.log("resdata: ",res);
       if(res.data.length >= 1 ) {
        setManagerId(res.data)
        openModal()
       }
       else{
        setNotfound("Google ads Account Not found ")
       }
    }

    useEffect(()=>{
        if(code){
            sendValue(code)
        }
       
    },[])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">

                    </div>
                    <div className="col-2 mt-5">
                     <h1>{notfound?notfound:null}</h1>
                       <GoogleClientIdModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} managerId={managerId}/>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleRedirect;