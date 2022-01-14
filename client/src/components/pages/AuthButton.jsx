import React from 'react'

import { Link,  } from 'react-router-dom';
const AuthButton = () => {

        return(
    
            <>
                <li className="nav-item">
                    <Link className="nav-link active text-light  fs-5" aria-current="page" to="/login">Log in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/register"><button className='custom-nav-btn'>Start Now</button></Link>
                </li>
            </>
        )
}

export default AuthButton;
