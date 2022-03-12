import React from 'react'
import { useEffect, useState } from 'react'
import services from '../../src/services/services'


const DetectedIps = () => {

    const [ips, setIps] = useState("");
    const [checked, setChecked] = useState(false);
    const [currentip, setCurrentIp] = useState();
    // const [callip, setCallIp] = useState(false);

    const detectedIp = async () => {
        const res = await services.detectedips();
        setIps(res.data.result)
    }

    const setCheck = (data, ip) => {
        setChecked(data)
        setCurrentIp(ip)
        // setCallIp(true)

    }
    
    const BlockIp = async(currentip)=>{
        const res = await services.ExcludeIp(currentip)
        console.log("exclude ip res",res)
        console.log(checked,currentip)
    }
   console.log("ip",currentip)

    useEffect(() => {
       BlockIp(currentip);
    }, [currentip])

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
                                            
                                            <input type="checkbox"  checked={checked[index]} onChange={(e) => setCheck(e.target.checked, data.ip)}/>
                                            <span class="slider round"></span>
                                       
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

export default DetectedIps