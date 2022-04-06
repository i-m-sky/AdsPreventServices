import React from 'react'
import AccountOverviewData from './AccountOverviewData';
import { Link, Outlet } from 'react-router-dom';
import NotAccounConnect from './NotAccountConnect';
import { useState } from 'react';


const AccountOverview = () => {

    return (
        <>
            <div className="container mt-5 account_overview p-4">
                <div className="row account_overview_div">
                    <h2 id='account_id'>Account Overview</h2>
                    <div>
                        <div className='d-md-flex text-center'>

                        <Link to="/dashboard/"> <button className='account_overview_button'> All</button></Link>
                            <Link to="/dashboard/googleoverview"> <button className='account_overview_button'> Google Ads</button> </Link>
                            <Link to="/dashboard/facebookoverview"> <button className='account_overview_button'> Facebook Ads</button></Link>
                            <Link to="/dashboard/microsoftoverview"> <button className='account_overview_button'> Microsoft Ads</button></Link>
                        </div>
                    </div>
                 </div>
                <div>
                    <Outlet />
                    <AccountOverviewData />
                </div>
            </div >
        </>
    )
}
export default AccountOverview;
