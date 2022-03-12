import React from 'react'
import { useEffect, useState } from 'react'
import Services from '../services/services';


const Campaigns = () => {
    const GoogleAdsId = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).result._id : null
    const [resdata, resSetRes] = useState([]);

    const getCampaigns = async (GoogleAdsId) => {
        const res = await Services.getCampaigns(GoogleAdsId);
        if (res.data.status === true) {
            resSetRes(res.data.campaigns)
        }
    }

    console.log(resdata)

    useEffect(() => {
        getCampaigns(GoogleAdsId)
    }, [])

    return (
        <>
        
      
            <div className="container mt-3">
                {resdata.length > 0 ? resdata.map((data, index) => (
                   
                    <div className="row mt-4">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8 detectediplist" >

                            <div>
                                <table className="table table-hover">

                                    <tbody>
                                        <tr className='detecttable'>
                                            <th>Name</th>
                                            <td>{data.campaign}</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>resourceName</th>
                                            <td>customers/5400575380/campaigns/16267506879</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>Status</th>
                                            <td>ENABLED</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>servingStatus</th>
                                            <td>serving</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>id</th>
                                            <td>16267506879</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>

                    </div>
                )):<h1>Not data found</h1> }


            </div>
        </>
    )
}

export default Campaigns;