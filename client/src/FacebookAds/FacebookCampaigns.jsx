import React from 'react'
import { useEffect, useState } from 'react'
import { PostApi } from '../services/Services'

const Campaigns = () => {
    const FacebookAdsAccount = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).result.account_id : null
    const [resdata, resSetRes] = useState([]);


    
    const getCampaigns = async (FacebookAdsAccount) => {

        PostApi(`/facebookcampaigns`,{FacebookAdsAccount}).then((data)=>{
            if(data.status===true){
                resSetRes(data.camp)   
            }
        })
        // const res = await Services.getFacebookCampaigns(FacebookAdsAccount);
        // console.log("facebook campain data",res.data)
        // if(res.data.status === true){
            
        // }
    
    }

    useEffect(() => {
        getCampaigns(FacebookAdsAccount)
    }, [])

    return (
        <>
            <div className="container mt-3">
            
                {resdata.length > 0 ? resdata.map((data, index) => (
                   
                    <div className="row mt-4">
                        {console.log("akash sdta",data)}
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8 detectediplist" >

                            <div>
                                <table className="table table-hover">

                                    <tbody>
                                        <tr className='detecttable'>
                                            <th>Name</th>
                                            <td>{data.name}</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>Objective</th>
                                            <td>{data.objective}</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>Status</th>
                                            <td>{data.status}</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>Daily Budget</th>
                                            <td>{data.daily_budget}</td>
                                        </tr>
                                        <tr className='detecttable'>
                                            <th>id</th>
                                            <td>{data.id}</td>
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