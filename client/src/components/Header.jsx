import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AuthButton from './pages/AuthButton';
import Account from './pages/Account';

const Header = () => {
    const { user,loading} = useSelector((state) => state.authReducer);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-3 bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 text-light mb-2" to="#">AdProtector</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 fs-4  mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="#">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Agencies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Blogs</Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav ms-auto m-3 mb-lg-0">
                            <li className="nav-item dropdown fs-5 ">
                                <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">English</Link></li>
                                    <li><Link className="dropdown-item" to="/french">French</Link></li>
                                    <li><Link className="dropdown-item" to="/italian">Italian</Link></li>
                                    <li><Link className="dropdown-item" to="/spanish">Spanish</Link></li>
                                    <li><Link className="dropdown-item" to="/hindi">Hindi</Link></li>
                                </ul>
                            </li>
                            
                         {!user?<AuthButton/>:<Account/>}
                         


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
