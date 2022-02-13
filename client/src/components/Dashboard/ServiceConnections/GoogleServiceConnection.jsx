import React from 'react'
import GoogleAuthButton from '../../Buttons/GoogleAuthButton';
import Services from '../../../services/services';
import { useParams } from 'react-router-dom';


// https://www.semanticglobal.com/googleapi.php

const GoogleServiceConnection = () => {
  
    // const LinkWithGoogle = async()=>{
        
    //     const res = await Services.LinkGoogle();
    //     console.log('Google Oauth respone',res);
        
    // }

    return (
        <>
            <div className="container">
                <div className='text-center mt-4'>
                    <h2>Let's get akash.com protected</h2>
                    <p>Connect your Google Ads account or MCC for automatic IP detection and blocking</p>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="google-div gm_common">
                            <h2>Connect with Google</h2>
                            <p>Link your email and in the following step
                                sync the relevant Google Ads account</p>
                               <a href="https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&scope=https://www.googleapis.com/auth/adwords&response_type=code&client_id=292773158439-7rv4ttopnpkbhle61ml1f8u19roj92d5.apps.googleusercontent.com&state=292773158439-7rv4ttopnpkbhle61ml1f8u19roj92d5.apps.googleusercontent.com&redirect_uri=http://localhost:3000/google/redirect"> <button className='service-btn'>Link with google</button></a>
                        </div>
                    </div>

                    <div className="col-md-6 gm_common">
                        <div className="manual-div ">
                            <h2>Link Manually</h2>
                            <p>Submit your Google Ads account or MCC
                                and access request to get connected</p>
                        </div>
                        <div className='manual-input'>
                            <input type="text" placeholder='123-456-7890' id='google_id' />
                            <button className='service-btn'>Connect Googel Ads Account</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GoogleServiceConnection;
