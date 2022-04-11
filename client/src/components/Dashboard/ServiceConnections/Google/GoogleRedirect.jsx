
import React, { useEffect, useState } from 'react'
import { PostApi } from '../../../../services/Services';
import GoogleClientIdModal from '../../../Modals/GoogleClientIdModal';


const GoogleRedirect = () => {

    const code = new URL(window.location.href).searchParams.get('code');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [clientDetails, setClientDetails] = useState([]);
    const [refreshToken,setRefreshToken] = useState();
    
    const openModal = () => {
        setIsOpen(true)
    }

    const sendValue = async (code) => {

        PostApi(`/google-setupads`,{code}).then((data)=>{
            if (data.status === true) {
                setClientDetails(data.accounts)
                setRefreshToken(data.refreshToken);
                openModal()
            }
        })
   
    }

    useEffect(() => {
        if (code) {
            sendValue(code)
        }

    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">

                    </div>
                    <div className="col-2 mt-5">
                        <h1>Loading...</h1>
                        <GoogleClientIdModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} clientDetails={clientDetails} refreshToken={refreshToken}/>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleRedirect;