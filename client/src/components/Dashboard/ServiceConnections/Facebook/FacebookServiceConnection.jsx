import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa';
import Services from '../../../../services/services';
import {useNavigate} from 'react-router-dom'
const FacebookServiceConnection = () => {

const navigate = useNavigate();
    const responseFacebook = async (facebookData) => {
        console.log(facebookData);
        const res = await Services.FacebookAd(facebookData);
        if(res.data.status===true){
            navigate('/dashboard/facebook-account',{state:{data:res.data,access_token:res.data.access_token}})
        }
        console.log("res data",res)
    }
    const componentClicked = (data) => {

    }
        return (
            <>
                <div className="container p-4">

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="google-div gm_common">
                                <h2>Connect with Facebook</h2>
                                <p>Link your email and in the following step
                                    sync the relevant Facebook Ads account</p>
                                <FacebookLogin
                                    appId='709419267156564'
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    scope="ads_management,ads_read,attribution_read,business_management"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass='facebook-btn-link'
                                    icon={<FaFacebook color='#3b5998' fontSize='19px' margin='20px'/>}
                                />
                            </div>
                        </div>



                    </div>
                </div>
            </>
        )
    }

export default FacebookServiceConnection

    