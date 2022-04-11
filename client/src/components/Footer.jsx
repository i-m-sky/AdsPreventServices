import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <footer className="text-center text-lg-start webfooter ">
                <section className="">
                    <div className="container-fluid text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className=" fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>{process.env.REACT_APP_TITLE}
                                </h6>
                                <p>
                                    {process.env.REACT_APP_TITLE} is an ad fraud and click-fraud detection and protection service software. Our anti click-fraud service protects Google Ads and Bing by using our industry leading detection algorithms blocking fraudulent IPs automatically. {process.env.REACT_APP_TITLE} protects Facebook Ads by detecting and blocking fake users from wasting impressions. {process.env.REACT_APP_TITLE} is not affiliated with any search engine and is an independent provider.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer_products">

                                <h6 className=" fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset">Reviews</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">How it works</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Agencies</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Press</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Blogs</Link>
                                </p>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className=" fw-bold mb-4">
                                    Resource
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset">API</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Affilates</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Docs</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset ">What is click fraud</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Ad fraud statics</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Contact</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className=" fw-bold mb-4">
                                    Social
                                </h6>

                                <p> <i className="fab fa-facebook">Facebook</i></p>
                                <p><i className="fab fa-linkedin">Linkedin</i></p>
                                <p> <i className="fab fa-twitter">Twitter</i></p>
                            </div>


                        </div>

                    </div>
                </section>



                <div className="text-center p-4" >
                    <hr></hr>
                    <div className="row">

                        <div className="col-md-4">
                            <span className='m-1'>Terms & Contditions</span>
                            <span className='m-1'>Privacy</span>
                            <span className='m-1'>GDPR</span>
                        </div>
                        <div className="col-md-8">
                            © 2021 Copyright:
                            <Link className="text-reset fw-bold" to="/"> {process.env.REACT_APP_TITLE.toLowerCase()}.com </Link> 2021. {process.env.REACT_APP_TITLE} is an ad fraud and click fraud protection and detection service

                        </div>

                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer
