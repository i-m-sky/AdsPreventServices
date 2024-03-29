import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Subscription from './Subscription/Subscription';

const Home = () => {
    return (
        <>
            <div className="container mt-4 ">
                <div className="row">
                    <div className="col-md-6 p-3 mt-5">
                        <h1>TOP-RATED CLICK FRAUD AND AD FRAUD PREVENTION SERVICE FOR GOOGLE AND FACEBOOK ADS</h1>
                        <span>
                            Ad Fraud & Click fraud will waste 20% of PPC advertisers’ budgets in 2021. Competitors and bots can click on your ads and waste your advertising budget.

                            {process.env.REACT_APP_TITLE} Google Ads click fraud protection and Facebook Ads fraud prevention software will block fake impressions and clicks. <br />
                        </span>
                        <div className='homebtn'>
                            <NavLink to="/login"> <button className='custom-home-btn'>START YOUR TRIAL</button></NavLink>
                        </div>

                    </div>
                    <div className="col-md-6 mt-3 text-center">
                        <img id='home_img' src="../images/Fraud.png" alt="bot" />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='text-center'>Our Plans</h4>
                <Subscription />
            </div>
        </>
    )
}

export default Home;
