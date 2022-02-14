import React from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from '../../spinner/Spinner';

const NotAccountConnect = (props) => {

    return (
        <>
            <div className="container">
                <div className="account_enable">
                    <img id='Enable-account-img' src="/images/AccountEnable.png" alt="Enable protection" />
                    <h3>You haven't enabled {props.value} Protection yet</h3>

                    <p>With ClickCease you can easily start protecting your {props.value} ads</p>
                    <NavLink to='/dashboard/googleserviceconnection'><button className='account_connect_btn'>Enable {props.value} Protection</button></NavLink>
                </div>
            </div>
        </>
    )

}

export default NotAccountConnect;
