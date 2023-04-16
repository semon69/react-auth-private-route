import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

const Header = () => {
    const {user, loggedOut} = useContext(AuthContext);
    const handleLogOut =() => {
        loggedOut()
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Test</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? 
                    <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs ml-2">Sign Out</button>
                    </>
                    : 
                    // <Link className="btn btn-sm normal-case text-xl" to="/login">Login</Link>
                    ""
                }
            </div>
        </div>
    );
};

export default Header;