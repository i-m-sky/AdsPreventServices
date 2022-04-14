import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { PostApi } from '../../services/Services';
import { useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { loginAction, clearError } from '../../features/actions/authAction'
import { AUTH_SUCCESS } from '../../features/actions-types';
import { saveToken } from '../../services/authService'
import authService from '../../services/authService'
import Spinner from '../pages/Spinner'
import { axios } from 'axios'



const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(50).required(),
});

const Payment = (props) => {

    const { price } = useParams();
    const [order, setOrder] = useState();
    const [selectState, setSelectState] = useState();

    const { user, loading, error } = useSelector((state) => state.authReducer);



    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        console.log("1")
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        PostApi('/payment/subscription49').then((data) => {
            if (data.status === 'created') {
                setOrder(data)
            }
        })

        const options = {
            key: 'rzp_test_QPULOzrbO6D11J',
            subscription_id: order.id,
            name: `${process.env.REACT_APP_TITLE}`,
            description: "Monthly Test Plan",
            image: '../images/Fraud.png',
            handler: function (response) {
                    
                const data = {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_subscription_id: response.razorpay_subscription_id,
                    razorpaySignature: response.razorpay_signature,
                };

                PostApi(`/payment/verification`, { data }).then((data) => {
                    if(data.status===true){
                        toast("Payment success")
                    }
                })
            },
            prefill: {
                name: user.user.name,
                email: user.user.email,

            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        }

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [country, setCountry] = useState();
    const [states, setStates] = useState();

    //login system
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        dispatch(loginAction(data));
        reset();

    };

    const getAddress = async () => {
        const getCountry = await fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => data.country_name)
        setCountry(getCountry)

    }

    useEffect(() => {
        getAddress()
    }, [1])

    const getState = () => {
        PostApi(`/getstates`, { country }).then((data) => {
            if (data.status === true) {
                setStates(data.result)
            }
        })
    }
    useEffect(() => {
        getState()
    }, [country])

    useEffect(() => {

        if (error) {
            toast(error)
            dispatch(clearError())
        }
    }, [error])


    useEffect(() => {
        if (user) {
            navigate(`/payment/${price}`);
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
            <section >
                <div className="container py-5 ">
                    <div className="card payment-cont">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center pb-5">


                                <div className="col-md-7 col-xl-5 mb-4 mb-md-0 mt-3">
                                    {user ?
                                        <div>
                                            <h4 className="text-success">${price}.00</h4>
                                            <h4>Billing & Address</h4>
                                            <p>
                                                Insurance claims and all necessary dependencies will be submitted to your
                                                insurer for the coverred portion of this order
                                            </p>

                                            <form>
                                                <div class="form-group">
                                                    <label for="inputAddress">Country</label>
                                                    <input type="text" class="form-control" id="inputAddress" value={country} placeholder="1234 Main St" />
                                                </div>
                                                <div class="form-group mt-3">
                                                    <label for="inputAddress">Address</label>
                                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                                </div>

                                                <div class="form-row d-flex mt-3">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputCity">Town/City</label>
                                                        <input type="text" class="form-control" id="inputCity" />
                                                    </div>
                                                    <div class="form-group col-md-4 cemail">
                                                        <label for="inputState">State</label>
                                                        <select id="inputState" class="form-control" onChange={(e) => setSelectState(e.target.value)}>

                                                            {states && states.length > 0 ? states.map((data, index) => (

                                                                <option value={data.name}>{data.name}</option>

                                                            )) : <h1>Uttar Pradesh</h1>}
                                                        </select>
                                                    </div>

                                                </div>
                                            </form>

                                        </div> :
                                        <section>
                                            <div className="container-fluid py-5 ">
                                                <div className="row d-flex align-items-center justify-content-center h-100">

                                                    <div className="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                                        <h4 className='mb-4'>Login to AdsPrevent</h4>

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
                                                                <button type="submit" disabled={loading && true} className="login_btn">
                                                                    {loading ? <div className="spinne-area">
                                                                        <Spinner />
                                                                    </div> : "Log In"}
                                                                </button>


                                                            </div>
                                                        </form>

                                                        <Link to="/register">No account? Sign up
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    }

                                </div>

                                <div className="col-md-5 col-xl-4 offset-xl-1">
                                    <div className="py-4 d-flex justify-content-end">
                                        <h6><Link to="/">Cancel and return to website</Link></h6>
                                    </div>
                                    <div className="rounded d-flex flex-column p-2 payment-sidebar" >
                                        <div className="p-2 me-3">
                                            <h4>Summary</h4>
                                        </div>
                                        <div className="p-2 d-flex">
                                            <div className="col-8">
                                                Original price</div>
                                            <div className="ms-auto">${price}</div>
                                        </div>


                                        <div className="p-2 d-flex">
                                            <div className="col-8">
                                                Coupon discounts: <span className="fa fa-question-circle text-dark"></span>
                                            </div>
                                            <div className="ms-auto"><b>$00.0</b></div>
                                        </div>
                                        <div className="border-top px-2 mx-2"></div>
                                        <div className="p-2 d-flex pt-3">
                                            <div className="col-8"><b>Total</b></div>
                                            <div className="ms-auto"><b className="text-success">${price}.00</b></div>
                                        </div>

                                    </div>
                                    <p className='mt-4'>Your personal data will be used to process you order suppor your experience throughout this website and for other purposes. discribe here <span id='ppolicy'>Privacy policy</span> </p>
                                    <button className='mt-2 checkbtn' disabled={!user} onClick={displayRazorpay}>PROCEED TO CHECKOUT</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment;