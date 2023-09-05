import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';



const HeaderUnauth: React.FC = () => {
    

return (
    <div className="header">
        <div className="container">
        <div className='header-top'>
        <Link to="/">
        <img width="100%" src={logo} alt="logo" />
            </Link>

        <div className='header-links'>
            <Link to="/" className='links'>
                All books
            </Link>
            <Link to="/library" className='links'>
                My library
            </Link>
            <Link to="/profile" className='links'>
                My profile
            </Link>
            <Link to="/logout" className='links'>
                Log out
            </Link>
        </div>
        </div>
    </div>
    </div>
    );      
}

export default HeaderUnauth;