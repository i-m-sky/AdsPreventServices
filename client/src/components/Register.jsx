import React, { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clearError, registerAction } from '../features/actions/authAction';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa';
import Spinner from './pages/Spinner';
import { toast } from 'react-toastify';
import authService from '../services/authService';
import { saveToken } from '../services/Services';
import { AUTH_SUCCESS } from '../features/actions-types';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading, error } = useSelector((state) => state.authReducer);

    const schema = yup.object().shape({
        name: yup.string().min(4).max(30).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        domain: yup.string().url().required()
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {
        dispatch(registerAction(data));
        reset();
    };

    useEffect(() => {
        if (error) {
            toast(error)
            dispatch(clearError());
        }
    }, [error])

    useEffect(() => {

        if (!user) {
            navigate('/register');
        }
        else if (user) {
            navigate('/dashboard');
        }
    }, [navigate, user])


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

    return (
        <>
            <section  >
                <div className="container mt-5">
                    <div className="row d-flex align-items-center justify-content-center ">
                        <div className="col-md-6 col-lg-5 col-xl-3">
                            <div>
                                <h6>{process.env.REACT_APP_TITLE} saves us 15-20% of our Google Ads spend every month”</h6>
                                <hr />
                                <img src="images/qualities.png" id='register_img' alt="img" />
                                <h6>CCPA + GDPR</h6>
                                <p>{process.env.REACT_APP_TITLE} is committed to protecting your data and respecting your privacy</p>
                                <h6>24/7 Support</h6>
                                <p>Dedicated account managers are available for your every need.</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-xl-7 mt-2 offset-xl-1 ">

                            <div className="divider d-flex align-items-center my-4">
                                <h2 className="text-center fw-bold mx-3 mb-0">  Create your {process.env.REACT_APP_TITLE} account to start your trial</h2>
                            </div>
                            <div className='d-md-flex text-center '>
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className='google-btn'
                                />

                                <FacebookLogin
                                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    // onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass='facebook-btn'
                                    icon={<FaFacebook color='#3b5998' fontSize='19px' margin='20px' />}

                                />
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="d-md-flex ">
                                    <div className="form-outline mb-4 reg_field">
                                        <input
                                            {...register("name")}
                                            type="text"
                                            id="form1Example13"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                        <p id='error_msg'>{errors.name?.message}</p>
                                        <label className="form-label" htmlFor="form1Example13">Your Name</label>
                                    </div>
                                    <div className="form-outline mb-4 ml-4 reg_field">
                                        <input
                                            {...register("email")}
                                            type="email"
                                            id="form1Example2"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                        <p id='error_msg'>{errors.email?.message}</p>
                                        <label className="form-label" htmlFor="form1Example2">Your work Email</label>
                                    </div>
                                </div>

                                <div className="d-md-flex ">
                                    <div className="form-outline mb-4 reg_field">
                                        <input
                                            {...register("password")}
                                            type="password"
                                            id="form1Example23"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                        <p id='error_msg'>{errors.password?.message}</p>
                                        <label className="form-label" htmlFor="form1Example23">Password</label>
                                    </div>
                                    <div className="form-outline mb-4 reg_field">
                                        <input
                                            {...register("domain")}
                                            type="text"
                                            id="form1Example23"
                                            className="form-control form-control-lg"

                                        />
                                        <p id='error_msg'>{errors.domain?.message}</p>
                                        <label className="form-label" htmlFor="form1Example23">Your domain</label>
                                    </div>
                                </div>
                                <p id='error_msg'>{error}</p>

                                <div className="text-center">
                                    <div className="d-flex justify-content-around align-items-center mb-4 reg_field ">

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


                                    <button type="submit" disabled={loading && true} className="register_btn">
                                        {loading ? <Spinner /> : " Start your 7-Day free trail"}
                                    </button>
                                </div>
                                <Link to="/login">Have an account? Log in
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;