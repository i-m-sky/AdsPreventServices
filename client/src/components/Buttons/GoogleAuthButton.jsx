import React from 'react';
import { GoogleLogin } from 'react-google-login'
import authService from '../../services/authService';
import { saveToken } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { AUTH_SUCCESS } from '../../features/actions-types';

const GoogleAuthButton = (props) => {

    const dispatch = useDispatch();

    const responseGoogle = async (googleData) => {

        console.log("This is google data",googleData)
      
    }

    return (
        <>
            <GoogleLogin
                clientId="269579076451-tm2155fqa73munm0sjak4i87k83rc4p1.apps.googleusercontent.com"
                buttonText={props.value}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='google-btn'
            />
        </>
    )
};

export default GoogleAuthButton;
