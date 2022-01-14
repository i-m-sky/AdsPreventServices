import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="container mt-4 ">
            <div className="row">
                <div className="col-md-6 p-3 mt-5">
                    <h1>TOP-RATED CLICK FRAUD AND AD FRAUD PREVENTION SERVICE FOR GOOGLE AND FACEBOOK ADS</h1>
                    <span>
                        Ad Fraud & Click fraud will waste 20% of PPC advertisers’ budgets in 2021. Competitors and bots can click on your ads and waste your advertising budget.

                        ClickCease™ Google Ads click fraud protection and Facebook Ads fraud prevention software will block fake impressions and clicks.
                    </span>
                    <button className='custom-home-btn'>START YOUR TRIAL</button>
                </div>
                <div className="col-md-6 mt-3">
                    <img id='home_img' src="../images/Fraud.png" alt="" />
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Home;
