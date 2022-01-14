import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../features/actions/authAction'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(32).required(),
  });
  

const Login = () => {
    const navigate = useNavigate()
     const dispatch = useDispatch()
     const {user,loading,error} = useSelector((state)=>state.authReducer)

     const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmitHandler = (data) => {
        dispatch(loginAction(data));
        reset();
      };

    useEffect(() => {
      
     
        if (!user) {
            navigate('/login');
        }
        else if (user) {
            navigate('/dashboard');
        }
    }, [error, navigate, user])
    return (
        <>
            <section>
                <div className="container py-5 ">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="images/Loginimg.jpg" className="img-fluid login_img" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h4>Login to ClickCease</h4>
                            <form  onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="form-outline mb-4">
                                    <input
                                    {...register("email")}
                                    type="email" 
                                    id="form1Example13" 
                                    className="form-control form-control-lg"
                                    />
                                     <p id='error_msg'>{errors.email?.message}</p>
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                </div>
                                

                                <div className="form-outline mb-4">
                                    <input
                                    {...register("password")}
                                     type="password" 
                                    id="form1Example23" 
                                    className="form-control form-control-lg" 
                                    />
                                     <p id='error_msg'>{errors.password?.message}{error}</p>
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                </div>
                              
                                <div className="d-flex justify-content-around align-items-center mb-4">

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

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                </div>
                            </form>
                            <div className='d-md-flex text-center'>
                                    <Link to="#"> <button className='register_btn_service'> <i className="fab fa-google me-2"></i>Continue with Google</button></Link>
                                    <Link to="#"> <button className='register_btn_service'> <i className="fab fa-facebook me-2"></i>Continue with Facebook</button></Link>
                                    
                                </div>
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
