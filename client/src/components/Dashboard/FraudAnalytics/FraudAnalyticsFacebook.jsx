import React from 'react'
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'

const FraudAnalyticsFacebook = () => {
  const { facebookAccount } = useSelector((state) => state.facebookReducer);
  const [clickdata, setClickData] = useState("default");

  if (facebookAccount) {
    return (
      <>
        <div className='container-fluid mt-5 '>
          <h3 className='mr-4 gfah' id='analytics-main-id'>Facebok Ads Fraud Analytics</h3>
          <div className='analytics-main-div'>
            <div>
              <Link to="/dashboard/fraudanalyticsfacebook/facebookcampaigns">  <button className='analytics-btn'>Campaigns</button></Link>
              <Link to="/dashboard/fraudanalyticsfacebook/facebookadsets"> <button className='analytics-btn'>AdSets</button></Link>
              <Link to="/dashboard/fraudanalyticsfacebook/countries"> <button className='analytics-btn'>Countries</button></Link>
              <Link to="#"> <button className='analytics-btn'>State</button></Link>
              <Link to="#"> <button className='analytics-btn'>Devices</button></Link>
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
        <NotAccountConnect value='Facebook' />
      </div>

    )
  }
}

export default FraudAnalyticsFacebook;
