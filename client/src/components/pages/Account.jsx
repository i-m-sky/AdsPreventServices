import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom';
import { deleteToken } from '../../services/authService';
import { AUTH_FAIL } from '../../features/actions-types';
const Account = () => {
    const {user,loading} = useSelector((state)=>state.authReducer);
    const navigate = useNavigate()
     const dispatch = useDispatch()

    const logoutUser = ()=>{
        deleteToken()
        dispatch({type:AUTH_FAIL});
        navigate('login')
    }

    return (
        <li className="nav-item dropdown fs-5 account_button">
        <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.user.name}
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Home</Link></li>
            <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item" to="#">Account Setting</Link></li>
            <li><Link className="dropdown-item" to="#">Billing & domain</Link></li>
            <li><Link className="dropdown-item" to="#">Account History</Link></li>
            <li><Link className="dropdown-item" to="#">Share Account</Link></li>
            <li><Link className="dropdown-item" to onClick={logoutUser}>Logout</Link></li>

        </ul>
    </li>
    )
}

export default Account;
