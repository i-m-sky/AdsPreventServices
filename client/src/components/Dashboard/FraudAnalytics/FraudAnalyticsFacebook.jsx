import React from 'react'
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom';
import {useState} from 'react'
import FacebookCampaigns from '../../../FacebookAds/FacebookCampaigns'
import Countries from '../../CommonAds/Countries';
const FraudAnalyticsFacebook = () => {
  const status = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).status : false
  const [clickdata, setClickData] = useState("default");

  if (status) {
    return (
      <>
        <div className='container-fluid mt-5 '>
          <h3 className='mr-4' id='analytics-main-id'>Facebok Ads Fraud Analytics</h3>
          <div className='analytics-main-div'>
            <div>
             {/* <Link to="/dashboard/fraudanalyticsgoogle/detectedips"> <button className='analytics-btn' >Detected Ips</button></Link> */}
             <button className='analytics-btn' onClick={() => setClickData('campaigns')}>Campaigns</button>
              <button className='analytics-btn' onClick={() => setClickData('countries')}>Countries</button>
              <button className='analytics-btn' onClick={() => setClickData('states')}>States</button>
              {/* <button className='analytics-btn' onClick={() => setClickData('Keywords')}>Keywords</button> */}
              
              {/* <Link to="/dashboard/fraudanalyticsgoogle/blockiplist"> <button className='analytics-btn' >Blocked Ips</button></Link> */}
              {/* <button className='analytics-btn' onClick={() => setClickData('iranges')}>Ip Ranges</button> */}
              <button className='analytics-btn' onClick={() => setClickData('devices')}>Devices</button>
            </div>
            <Outlet/>
            {clickdata === "default" ? <DataOnTheWay /> : clickdata === 'campaigns' ? <FacebookCampaigns /> :clickdata==="countries" ? <Countries/> : <DataOnTheWay />}
            
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <div className='mt-5'>
        <NotAccountConnect value='Facebook' />
      </div>

    )
  }


}

export default FraudAnalyticsFacebook
