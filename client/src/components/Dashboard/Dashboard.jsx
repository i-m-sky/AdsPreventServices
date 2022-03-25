
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';
import GoogleClientIdModal from '../Modals/GoogleClientIdModal';
import Spinner from '../pages/Spinner';


const Dashboard = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = ()=>{
        setIsOpen(true)
    }
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                    <ul className="navbar-nav dash_ul">

                        <li className="nav-item dash_reload mt-4">
                            Reload
                           
                        </li>
                        <li className="nav-item dropdown fs-5 mt-3 ">
                        <NavLink to="/dashboard" id="DashId">Account Overview</NavLink>
                            <hr id='dash_hr' />
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fraud Analytics
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalytics/google">Google Ads</Link></li>
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalytics/facebook">Facebook Ads</Link></li>
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalytics/microsoft">Microsoft Ads</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link dash_adspy"   to="#">AdSpy</Link>
                           
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="#">Track Conversions</Link></li>
                                <li><Link className="dropdown-item" to="#">Apply For Google Refund</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Domain Setting
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="#">Manage Detections Rule</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Auto IP Blocking</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Notifications</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Preferences</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Notifications</Link></li>
                                <li><Link className="dropdown-item" to="#">Domain Tracking setup</Link></li>
                            </ul>
                        </li>
                      
                    </ul>
                </div>
               
            <GoogleClientIdModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
         
            </nav>
            <div>
                <Outlet />
               
            </div>

        </>
    )
}

export default Dashboard;
