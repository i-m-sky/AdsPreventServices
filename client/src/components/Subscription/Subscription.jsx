import React from 'react'
import { Link } from 'react-router-dom';
const Subscription = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                  
                    <div className="col-sm-4 mt-3 ">

                        <div className="firstsubs text-center colshadow">
                            <div className="text-center">
                                <h2>Standard</h2>
                                <p>Protect 1 Platform</p>
                                <p>Goolge Ads or Facebook Ads</p>
                                <span>$</span><span id='amount'>49</span> <span>/m</span>
                                <br /> <Link to="/payment/49"> <button className='btn_subscription'>Try</button></Link>
                                <hr />
                                <p>Up to 5,000 clicks</p>
                            </div>
                            <div className='firstsubs-data'>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> {process.env.REACT_APP_TITLE} AI detection algorithm</p>
                                <p className='text-dest'><i className="fa fa-times" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p className='text-dest'><i className="fa fa-times" aria-hidden="true"></i> Account overview</p>
                                <p className='text-dest'><i className="fa fa-times" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-4 mt-3 ">
                        <div className="secondsubs colshadow">
                            <div className="text-center">
                                <h2>Pro</h2>
                                <p>Protect 1 Platform</p>
                                <p>Goolge Ads or Facebook Ads</p>
                                <span>$</span><span id='amount'>59</span> <span>/m</span>
                                <br /> <Link to="/payment/59"> <button className='btn_subscription'>Try</button></Link>
                                <hr />
                                <p>Up to 10,000 clicks</p>
                            </div>

                            <div className='firstsubs-data'>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> {process.env.REACT_APP_TITLE} AI detection algorithm</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Account overview</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mt-3 ">
                    <div className="secondsubs colshadow">
                            <div className="text-center">
                                <h2>Premium</h2>
                                <p>Protect 2 Platform</p>
                                <p>Goolge Ads, Facebook Ads or both</p>
                                <span>$</span><span id='amount'>89</span> <span>/m</span>
                                <br /> <Link to="/payment/89"> <button className='btn_subscription'>Try</button></Link>
                                <hr />
                                <p>Up to 15,000 clicks</p>
                            </div>

                            <div className='firstsubs-data'>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> {process.env.REACT_APP_TITLE} AI detection algorithm</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Account overview</p>
                                <p><i className="fa fa-check" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Subscription;