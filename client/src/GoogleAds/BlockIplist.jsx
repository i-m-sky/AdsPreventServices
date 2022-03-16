import React from 'react';
import { useEffect, useState } from 'react';
import services from '../../src/services/services';

const result = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).result : null
const GoogleAdsId = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).result._id : null

const BlockIplist = () => {

    const [blockIplist, SetBlockIplist] = useState([]);
    const [resdata, resSetRes] = useState([]);
    const [resourceName, SetResourceName] = useState();

    const getCampaigns = async () => {
        const res = await services.getCampaigns(GoogleAdsId);
        if (res.data.status === true) {
            SetResourceName(res.data.campaigns[0].campaign.campaign.resourceName)
            resSetRes(res.data.campaigns)
        }
    }

    const list = async () => {
        const res = await services.BlockIplist(resourceName);
        console.log("block ip list",res.data.result[0].excludeIp)
         SetBlockIplist(res.data.result[0].excludeIp)
    }

    useEffect(() => {
        getCampaigns()
        
    }, [])
    useEffect(() => {
        list()
    }, [resourceName])

    console.log("resourceName", resourceName)
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 detectediplist">
                        <select name="" id="campdrop" onChange={(e) => SetResourceName(e.target.value)}>
                            {resdata.length > 0 ? resdata.map((data, index) => (

                                <option value={data.campaign.campaign.resourceName}>CampaignName - {data.campaign.campaign.name} </option>
                               
                            )) : <h1>Not data found</h1>}
                        </select>
                        <table className="table table-hover">

                            <tbody>
                                <tr className='detecttable'>
                                    <th>S. No</th>
                                    <th scope="row" className='iplist'>Ip Address</th>
                                    <td>Threat Level</td>
                                    <td>Blocked</td>
                                    <td>Block Reason</td>
                                </tr>

                                {blockIplist.length > 0 ? blockIplist.map((data, index) => (

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

                    <div className="col-md-2">

                    </div>

                </div>
            </div>

        </>
    )
}

export default BlockIplist;