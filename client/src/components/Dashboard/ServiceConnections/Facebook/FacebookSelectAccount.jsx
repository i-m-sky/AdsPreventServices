import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import facebookAdsAction from '../../../../features/actions/facebookAdsAction';

const FacebookSelectAccount = () => {
    const {facebookAccount} = useSelector((state)=>state.facebookReducer);
  
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = location.state.data.Adsaccount.data;
    const access_token = location.state.data.access_token;

    const getData = async (facebookAdsId) => {
        dispatch(facebookAdsAction({access_token,facebookAdsId}))
    }

    useEffect(()=>{
        if(facebookAccount){
            navigate("/dashboard/fraudanalytics/facebook")
        }
    },[facebookAccount])
      
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