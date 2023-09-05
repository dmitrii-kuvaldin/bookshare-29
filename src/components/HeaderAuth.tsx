import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';



const HeaderAuth: React.FC = () => {
    

return (
    <div className="header">
        <div className="container">
        <div className='header-top'>
        <Link to="/">
        <img width="100%" src={logo} alt="logo" />
            </Link>

        <div className='header-links'>
            <Link to="/login" className='links'>
                Login
            </Link>
            <Link to="/registration" className='links'>
                Sign Up
            </Link>
        </div>
        </div>
    </div>
    </div>
    );      
}

export default HeaderAuth;