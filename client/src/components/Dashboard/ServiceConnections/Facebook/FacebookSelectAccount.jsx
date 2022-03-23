import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Services from '../../../../services/services';
import { saveFacebookData } from '../../../../services/services';
const FacebookSelectAccount = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state.data.Adsaccount.data;
    const access_token = location.state.data.access_token;
    console.log(access_token)


    const getData = async(id) => {
        const res = await Services.FacebookSetup(access_token,id);
        if(res.data.status===true){
            saveFacebookData(res.data);
            navigate('/dashboard/fraudanalytics/facebook');
        }
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