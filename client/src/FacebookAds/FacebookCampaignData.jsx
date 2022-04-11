import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../components/pages/Spinner'
import { PostApi } from '../services/Services'
const FacebookCampaignData = () => {
    
    const FacebookAdsAccount = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).result.account_id : null
    const [resdata, resSetRes] = useState([]);

    const getCampaigns = (FacebookAdsAccount) => {

        PostApi(`/facebookcampaigns`, { account_id: FacebookAdsAccount }).then((data) => {
            if (data.status === true) {
                resSetRes(data.camp)
            }
        })
    }

    useEffect(() => {
        getCampaigns(FacebookAdsAccount)
    }, [])

    return (
        <>
            <table className="fixed_header mt-3">
                <thead>
                    <tr className='fbtab'>
                        <th>Campaign</th>
                        <th>Objective</th>
                        <th>Status</th>
                        <th>Daily Budget</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {resdata.length > 0 ? resdata.map((data, index) => (

                        <tr className='fbval'>
                            <td>{data.name}</td>
                            <td>{data.objective}</td>
                            <td>{data.status}</td>
                            <td> {data.daily_budget ? data.daily_budget : "-"}</td>
                            <td>{data.id}</td>
                        </tr>

                    )) : <div className='spinner'><Spinner /></div>}
                </tbody>
            </table>

        </>
    )
}

export default FacebookCampaignData