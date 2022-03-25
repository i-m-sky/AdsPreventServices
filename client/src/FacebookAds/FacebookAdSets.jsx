import React from 'react'
import { PostApi } from '../services/Services'
import { useEffect, useState } from 'react'

const FacebookAdSets = () => {
    const FacebookAdsAccount = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).result.account_id : null
    const [adSet, setAdSet] = useState([]);

    const getAdSets = (FacebookAdsAccount) => {
        PostApi(`/facebookadsets`, { account_id: FacebookAdsAccount }).then((data) => {
            console.log("adsets", data)
            if (data.status === true) {
                setAdSet(data.camp);
            }
        })
    }

    useEffect(() => {
        getAdSets(FacebookAdsAccount)
    }, [])

    return (
        <>
            <table class="fixed_header mt-3">
                <thead className='fbtab'>
                    <tr className='fbtab'>
                        <th>Ad Set</th>
                        <th>Account Id</th>
                        <th>Start Time</th>
                        <th>Create Time</th>
                        <th>daily Budget</th>
                        <th>Status</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    {adSet.length > 0 ? adSet.map((data, index) => (

                        <tr>
                            <td>{data.name}</td>
                            <td>{data.account_id}</td>
                            <td>{data.start_time}</td>
                            <td> {data.created_time}</td>
                            <td>{data.daily_budget}</td>
                            <td>{data.status}</td>
                            <td>{data.id}</td>
                        </tr>

                    )) : <h1>Not data found</h1>}
                </tbody>
            </table>
        </>
    )
}

export default FacebookAdSets