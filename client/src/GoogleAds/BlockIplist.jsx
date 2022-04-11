import React from 'react';
import { useEffect, useState } from 'react';
import { PostApi } from '../services/Services';
import { useSelector } from 'react-redux';

const BlockIplist = () => {
    const { googleAccount } = useSelector((state) => state.googleReducer);

    
    const [resdata, resSetRes] = useState([]);
    const [resourceName, SetResourceName] = useState("");
    const [blockIplist, SetBlockIplist] = useState([]);

    const getCampaigns = async () => {
        console.log("second")
        PostApi(`/getcampaigns`, { GoogleAdsId: googleAccount._id }).then((data) => {
            if (data.status === true) {
                resSetRes(data.campaigns)
                SetResourceName(data.campaigns[0].campaign.campaign.resourceName)
            }
        })
        console.log("after second")
    }

    useEffect(() => {
        console.log("First")
        getCampaigns()
    }, [1])

    const list = async () => {
        console.log("resource",resourceName)
        console.log("forth")
        PostApi(`/blockiplist`, {resourceName:resourceName}).then((data) => {
            if (data.status === true) {
                SetBlockIplist(data.result[0].excludeIp)
            }
        })
    }
    useEffect(() => {
        console.log("third")
            list()
    }, [resourceName])


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 detectediplist">
                        <select name="" id="campdrop" onChange={(e) => SetResourceName(e.target.value)}>
                            {resdata && resdata.length > 0 ? resdata.map((data, index) => (

                                <option value={data.campaign.campaign.resourceName}>CampaignName - {data.campaign.campaign.name} </option>

                            )) : <h1>Not data found</h1>}
                        </select>
                        <div className="table-responsive table-hover mt-5">
                            <table className="table table-hover">

                                <tbody>
                                    <tr className='detecttable'>
                                        <th>S. No</th>
                                        <th scope="row" className='iplist'>Ip Address</th>
                                        <td>Threat Level</td>
                                        <td>Blocked</td>
                                        <td>Block Reason</td>
                                    </tr>

                                    {blockIplist && blockIplist.length > 0 ? blockIplist.map((data, index) => (

                                        <tr className='critical'>
                                            <th>{index + 1}</th>
                                            <th scope="row" className='iplist'>{data.ip}</th>
                                            <td>High</td>
                                            <td>true</td>
                                            <td>Bot</td>
                                        </tr>
                                    )) : <h1>No exclude IPS</h1>}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-2">

                    </div>

                </div>
            </div>

        </>
    )
}

export default BlockIplist;