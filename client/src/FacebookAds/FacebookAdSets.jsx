import React from 'react'
import { PostApi } from '../services/Services'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/pages/Spinner';

const FacebookAdSets = () => {
    const { facebookAccount, loading } = useSelector((state) => state.facebookReducer);
    console.log("facebook loading",loading)
    const [adSet, setAdSet] = useState([]);
    const arr = [];

    const getAdSets = (account_id) => {
        PostApi(`/facebookadsets`, { account_id }).then((data) => {
            console.log("All adsets", data)
            if (data.status === true) {
                setAdSet(data.camp);
            }
        })
    }

    useEffect(() => {
        getAdSets(facebookAccount.result.account_id)
    }, [])

    return (
        <>
            <table className="fixed_header mt-3">
                <thead className='fbtab'>
                    <tr className='fbtab'>
                        <th>Ad Set</th>
                        <th>Account Id</th>
                        <th>Campaign Id</th>
                        <th>Start Time</th>
                        <th>Create Time</th>
                        <th>daily Budget</th>
                        <th>Status</th>
                        <th>id</th>
                        {/* <th>excluded Geo locations</th> */}
                    </tr>
                </thead>
                {loading && <Spinner/>}
                <tbody>
                    {adSet.length > 0 ? adSet.map((data, index) => (
                     
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.account_id}</td>
                            <td>{data.campaign_id}</td>
                            <td>{data.start_time}</td>
                            <td> {data.created_time}</td>
                            <td>{data.daily_budget}</td>
                            <td>{data.status}</td>
                            <td>{data.id}</td>
                        
                            <td></td>
                        </tr>

                    )) : <h2 className='text-center mt-5'>No AdSets Available </h2>}
                </tbody>
            </table>
        </>
    )
}

export default FacebookAdSets


