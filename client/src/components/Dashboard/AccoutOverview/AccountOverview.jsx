import React from 'react'
import AccountOverviewData from './AccountOverviewData';
import NotAccounConnect from './NotAccountConnect';
import { useState } from 'react';
import GoogleOverview from './GoogleOverview';
import FacebookOverview from './FacebookOverview';
import MicrosoftOverview from './MicrosoftOverview';

const AccountOverview = () => {

    const [clickdata, setClickData] = useState("All");

    return (
        <>
            <div className="container mt-5 account_overview p-4">
                <div className="row account_overview_div">
                    <h2 id='account_id'>Account Overview</h2>
                    <div>
                        <div className='d-md-flex text-center'>

                            <button className='account_overview_button' onClick={() => setClickData('All')}> All</button>
                            <button className='account_overview_button' onClick={() => setClickData('Google')}> Google Ads</button>
                            <button className='account_overview_button' onClick={() => setClickData('Facebook')}> Facebook Ads</button>
                            <button className='account_overview_button' onClick={() => setClickData('Microsoft')}> Microsoft Ads</button>
                            
                        </div>
                    </div>
                </div>
                <div>

                    {clickdata === "All" ? <AccountOverviewData value={clickdata} /> : clickdata==='Google' ? <GoogleOverview/>: clickdata==='Facebook'?<FacebookOverview/>:clickdata==="Microsoft"?<MicrosoftOverview/>:<NotAccounConnect/>}

                </div>
            </div >
        </>
    )
}
export default AccountOverview;
