import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
const FacebookSelectAccount = () => {
    const location = useLocation();

    const data = location.state.data.Adsaccount.data


    const getData = (id) => {
        console.log("Facebook ads id", id)
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <div className='text-center fbadssel mt-4'>
                            <h2>Select your Facebook Ads Account</h2>

                            <div className='manual-input mt-2'>

                                {data.length >= 0 ? data.map((item) =>

                                    <div > <button className='select_item mt-3' onClick={() => getData(item.id)}>
                                        <div className="facebook-account" >

                                            <h6> {item.name} - <br /> {item.id}</h6>

                                        </div>
                                    </button>  </div>

                                ) : "No Facebook ads found"}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacebookSelectAccount