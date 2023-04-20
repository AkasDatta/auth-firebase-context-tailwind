import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error = console.error(error))
    }


    return (
        <div>
            <div className="navbar bg-info-content text-primary-content pl-5">
                <a className="btn btn-ghost normal-case text-xl ">Auth Master</a>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl " to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl " to="/orders">Orders</Link>
                    <Link className="btn btn-ghost normal-case text-xl " to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl " to="/register">Register</Link>
                    {
                        user ? <>
                            <span className='mr-4'>{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>
                        </> : 
                            <Link className='btn btn-ghost normal-case text-xl' to="/login">Login Now</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;