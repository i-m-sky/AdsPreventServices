import React from 'react'
import { useEffect, useState } from 'react'
import services from '../../src/services/services'
import { useParams } from 'react-router-dom'

const result = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).result : null
const GoogleAdsId = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).result._id : null
console.log(result)

const BlockIp = () => {

 const {resource} = useParams();
    const [ips, setIps] = useState("");
    const [checked, setChecked] = useState(false);


    const detectedIp = async () => {
        const res = await services.detectedips();
        setIps(res.data.result)
    }


    const setCheck = (data, ip) => {
        console.log("all data",data,ip,data)
        BlockIp(ip,result,atob(resource))
    }

    const BlockIp = async (currentip, result,resource) => {
       
        const res = await services.ExcludeIp(currentip,result,resource)
        console.log("Block ip:",res)
    }
   
    useEffect(() => {
        detectedIp()
    }, [])
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 detectediplist">
                        <table className="table table-hover">

                            <tbody>
                                <tr className='detecttable'>
                                    <th>S. No</th>
                                    <th scope="row" className='iplist'>Ip Address</th>
                                    <td>Threat Level</td>
                                    <td>Blocked</td>
                                    <td>Block Reason</td>
                                </tr>

                                {ips.length > 0 ? ips.map((data, index) => (
                                    <tr className='critical'>
                                        <th>{index + 1}</th>
                                        <th scope="row" className='iplist'>{data.ip}</th>
                                        <td>{data.weightage >= 2 ? "Critical" : "Low"}</td>
                                        <td> <label class="switch ml-3">

                                            <input type="checkbox" checked={checked[index]} onChange={(e) => setCheck(e.target.checked, data.ip)} />
                                            <span class="slider round" ></span>

                                        </label></td>
                                        <td>-</td>
                                    </tr>
                                )) : <h1>No data Found</h1>}

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

export default BlockIp;