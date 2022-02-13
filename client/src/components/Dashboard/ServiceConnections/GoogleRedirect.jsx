import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import Services from '../../../services/services';
import Spinner from '../../Spinner/Spinner';

const GoogleRedirect = () => {

    const navigate = useNavigate();

    const scope = new URL(window.location.href).searchParams.get('scope');
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');


    const SendGoogle = async(res)=>{
        console.log('send google data')
       const data =  await Services.SendGoogleData(res)
       console.log('google data send successfull to backend')
        if(data){
            console.log('navigate to dashboard')
            navigate('/dashboard/fraudanalyticsgoogle');
        }
    }


    const LinkWithGoogle = async (scope, code, state) => {
        console.log('LinkWithgGoogle funtion call');

        const res = await Services.LinkWithGoogle(scope, code, state);
        console.log("response calling...")
        console.log(res)
        if(res){
            console.log("run res if funtion")
            SendGoogle(res);
            
        }
       
    }

    useEffect(() => {
        console.log('useEffect call')
        LinkWithGoogle(scope, code, state);
        console.log("useEffect end")
        
    }, [LinkWithGoogle]);

    return (
        <>
            <div className='mx-auto'>

                <Spinner />

            </div>

        </>
    )
}

export default GoogleRedirect;