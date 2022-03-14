import React from 'react'
import { useLocation,Link, Outlet } from 'react-router-dom';
import DetectedIps from '../../../GoogleAds/DetectedIps';
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay';
import { useState,useEffect } from 'react';
import Campaigns from '../../../GoogleAds/Campaigns';

const FraudAnalyticsGoogle = () => {
  const [clickdata, setClickData] = useState("default");
  const status = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).status : false
 
  if (status) {
    return (
      <>
        <div className='container-fluid mt-5 '>
          <h3 className='mr-4' id='analytics-main-id'>Google Ads Fraud Analytics</h3>
          <div className='analytics-main-div'>
            <div>
             <Link to="/dashboard/fraudanalyticsgoogle/detectedips"> <button className='analytics-btn' >Detected Ips</button></Link>
              <button className='analytics-btn' onClick={() => setClickData('countries')}>Countries</button>
              <button className='analytics-btn' onClick={() => setClickData('Keywords')}>Keywords</button>
              <button className='analytics-btn' onClick={() => setClickData('campaigns')}>Campaigns</button>
              <button className='analytics-btn' onClick={() => setClickData('iranges')}>Ip Ranges</button>
              <button className='analytics-btn' onClick={() => setClickData('devices')}>Devices</button>
            </div>
            <Outlet/>
            {clickdata === "default" ? <DataOnTheWay /> : clickdata === 'campaigns' ? <Campaigns /> : <DataOnTheWay />}
            
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <div className='mt-5'>
        <NotAccountConnect value='Google' />
      </div>
    )
  }
}

export default FraudAnalyticsGoogle;
