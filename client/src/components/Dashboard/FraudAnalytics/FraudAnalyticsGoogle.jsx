import React from 'react'
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay';

const FraudAnalyticsGoogle = () => {

  const account = true;

  if(account){
  
    return (
      <>
       <div className='container-fluid mt-5 '>
      <h3 className='mr-4'  id='analytics-main-id'>Google Ads Fraud Analytics</h3>
      <div className='analytics-main-div'>
        <div >
          <button className='analytics-btn'>Detected Ips</button>
          <button className='analytics-btn'>Countries</button>
          <button className='analytics-btn'>Keywords</button>
          <button className='analytics-btn'>Ip Ranges</button>
          <button className='analytics-btn'>Devices</button>
        </div>
        <DataOnTheWay/>
      </div>
      </div>
      </>
    )
  }
  else{
    return(
      <div className='mt-5'>
          <NotAccountConnect value='Google'/>
      </div>
    
    )
  }
}

export default FraudAnalyticsGoogle;
