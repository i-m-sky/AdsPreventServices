import React from 'react'
import {useParams } from 'react-router-dom';
import FraudAnalyticsGoogle from './FraudAnalyticsGoogle';
import FraudAnalyticsFacebook from './FraudAnalyticsFacebook';
import FraudAnalyticsMicrosoft from './FraudAnalyticsMicrosoft';

const FraudAnalytics = () => {
  const {adstype} = useParams();
  if(adstype==="google"){
    return(
      <FraudAnalyticsGoogle/>
    )
  }
  else if(adstype==="facebook"){
    return(
      <FraudAnalyticsFacebook/>
    )
  }
  else if(adstype==="microsoft"){
    return(
      <FraudAnalyticsMicrosoft/>
    )
  }
}

export default FraudAnalytics;
