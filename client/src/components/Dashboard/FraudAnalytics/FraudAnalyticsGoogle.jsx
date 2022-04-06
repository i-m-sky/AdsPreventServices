import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay';

const FraudAnalyticsGoogle = () => {
  const { googleAccount } = useSelector((state) => state.googleReducer);

  if (googleAccount) {
    return (
      <>
        <div className='container-fluid mt-5 '>
          <h3 className='gfah'>Google Ads Fraud Analytics</h3>

          <div className='analytics-main-div'>
            <div>
              <Link to="/dashboard/fraudanalyticsgoogle/detectedips"> <button className='analytics-btn' >Detected Ips</button></Link>
              <Link to="/dashboard/fraudanalyticsgoogle/Countries"><button className='analytics-btn'>Countries</button></Link>
              <Link to="/dashboard/fraudanalyticsgoogle/googlecampaigns"> <button className='analytics-btn'>Campaigns</button></Link>
              <Link to="/dashboard/fraudanalyticsgoogle/blockiplist"> <button className='analytics-btn' >Blocked Ips</button></Link>
              <Link to="/dashboard/fraudanalyticsgoogle/generatecodegoogle"> <button className='analytics-btn'>Generate Code</button></Link>
            </div>  
            <Outlet />
            <DataOnTheWay/>
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
