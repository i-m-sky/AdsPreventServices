import React from 'react'
import {  useState } from 'react'
import { MdCampaign } from 'react-icons/md';
import { BsFillFileSpreadsheetFill } from 'react-icons/bs'
import { BiCartAlt } from 'react-icons/bi'
import FacebookCampaignData from './FacebookCampaignData';
import DataOnTheWay from '../components/Dashboard/FraudAnalytics/DataOnTheWay';
import FacebookAd from './FacebookAd';
import FacebookAdSets from './FacebookAdSets';

const Campaigns = () => {
    
    const [setClick,setClickData] = useState("default");
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                    <button className='fbcamp mt-1' onClick={()=>setClickData("camp")}> <MdCampaign/> Campaigns</button>
                    </div>
                    <div className="col-md-4">
                    <button className='fbcamp mt-1' onClick={()=>setClickData("set")}> <BsFillFileSpreadsheetFill /> Ad Sets</button>
                    </div>
                    <div className="col-md-4">
                    <button className='fbcamp mt-1' onClick={()=>setClickData("ad")}> <BiCartAlt /> Ad </button>
                    </div>
                    <div className="row">
                    {setClick === "default" ? <FacebookCampaignData/> : setClick === 'camp' ? <FacebookCampaignData/>:setClick==="set"?<FacebookAdSets/> :setClick==="ad"? <FacebookAd/> : <DataOnTheWay/>}
                    </div>
                
                </div>

            </div>


        </>
    )
}

export default Campaigns;