import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearError, loginAction } from '../features/actions/authAction'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authService from '../services/authService'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa';
import { saveToken } from '../services/authService'
import { AUTH_SUCCESS } from '../features/actions-types'
import Spinner from './pages/Spinner'
import { ToastContainer, toast } from 'react-toastify';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(50).required(),
});


const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, loading, error } = useSelector((state) => state.authReducer);
   
    console.log("loading",loading)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        dispatch(loginAction(data));
        reset();
        
    };

    useEffect(()=>{
        if(error){
            toast(error)
            dispatch(clearError())
        }
    },[error])

    useEffect(() => {

        if (!user) {
            navigate('/login');
        }
        else if (user) {
            navigate('/dashboard');
        }

    }, [user])

    const responseGoogle = async (googleData) => {
        const res = await authService.LoginWithGoogle(googleData);
        if (res.data.status === true) {
            saveToken(res.data.user);
            dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
        }

    }
    const responseFacebook = async (facebookData) => {
        console.log(facebookData);
        const res = await authService.LoginWithFacebook(facebookData.accessToken, facebookData.userID)
        saveToken(res.data.user);
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
    }
    const componentClicked = (data) => {

    }

    return (
        <>
            <section>
                <div className="container py-5 ">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="images/Loginimg.jpg" className="img-fluid login_img" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h4 className='mb-4'>Login to ClickCease</h4>

                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className='google-btn'
                            />

                            <FacebookLogin
                                appId='709419267156564'
                                autoLoad={false}
                                fields="name,email,picture"
                                scope="ads_management,ads_read"
                                onClick={componentClicked}
                                callback={responseFacebook}
                                cssClass='facebook-btn'
                                icon={<FaFacebook color='#3b5998' fontSize='19px' margin='20px' />}
                            />
                            <div className="divider d-flex align-items-center my-3">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="form-outline mb-4">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        id="form1Example13"
                                        className="form-control form-control-lg"
                                        placeholder='Enter email'
                                    />
                                   
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                    <p id='error_msg'>{errors.email?.message}</p>
                                </div>


                                <div className="form-outline mb-4">
                                    <input
                                        {...register("password")}
                                        type="password"
                                        id="form1Example23"
                                        className="form-control form-control-lg"
                                        placeholder='Enter Password'
                                    />
                                   
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                    <p id='error_msg'>{errors.password?.message}{error}</p>
                                </div>
                                <div className="spinne-area">
                                {loading &&  <Spinner/>} 
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-4 mt-3">

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                    </div>
                                    <Link to="#!">Forgot password?</Link>

                                </div>
                               
                              
                                <div className="text-center">
                                    <button type="submit" className="login_btn">Log in</button>
                                   

                                </div>
                            </form>

                            <Link to="/register">No account? Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default Login
