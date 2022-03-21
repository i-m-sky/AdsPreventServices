import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa';
import Services from '../../../../services/services';
const FacebookServiceConnection = () => {


    const responseFacebook = async (facebookData) => {
        console.log(facebookData.accessToken);
        const res = await Services.FacebookAd(facebookData);

        
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
                                    scope="ads_management,ads_read"
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

    