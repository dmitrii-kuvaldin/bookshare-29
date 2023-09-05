import React from 'react';
import { Link } from 'react-router-dom';

const Logout: React.FC = () => {
    return (
        <div className='container'>
            Do you want to Log out?
            <div>
            <Link to="/" className='button'>Yes</Link>
            <Link to="/" className='button'>No</Link>
            </div>
        </div>
    )}

    export default Logout;