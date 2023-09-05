import React, { useEffect } from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './UserAuth/userAuthOperation/userAuthOperation.ts';
import { setUser } from '../redux/slices/usersSlice.js';
import axios from 'axios';
import { setBooks } from '../redux/slices/booksSlice';



const Header: React.FC = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  // console.log('user ===>', user);
  // console.log('user ===>', user.id);

  useEffect(() => {
    async function fetchData() {
      try {
        const getMe = await getUser();
        console.log("getMe", getMe?.data);

        if (getMe?.status === 200) {
          dispatch(setUser(getMe.data));
        }
        const getBooks = await axios(`/api/books`)
        // if (getBooks?.status === 200) {
        //   dispatch(setBooks(getBooks.data));
        // }
        console.log('books status,', getBooks?.status);
        console.log('getBooks', getBooks.data);

        dispatch(setBooks(getBooks.data));

        console.log('getBooks ===>', getBooks?.data);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [dispatch]);


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

export default Header;
