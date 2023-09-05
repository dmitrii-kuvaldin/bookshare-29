import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { initUserAuth } from './initUser.ts';
import { getUser, userLogin } from './userAuthOperation/userAuthOperation.ts';
import { setUser } from '../../redux/slices/usersSlice.js';


const Login: React.FC = () => {

  const [loginUser, setLoginUser] = useState(initUserAuth);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();


  const handleLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginUser((prev) => ({
      ...prev, [name]: value
    }))
  }



  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = await userLogin(loginUser);
      if (userData?.status === 200) {
        const getMe = await getUser();
        console.log("getMe", getMe?.data);

        if (getMe?.status === 200) {
          dispatch(setUser(getMe.data))
          navigate("/")
        }

      } else {
        setError("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      setError("Incorrect email or password. Please try again.");
      console.log(error)
    }
  }


  return (
    <div className='container'>
      <h2 className='content__title'>
        Welcome to Book Share
      </h2>
      <form onSubmit={handleLoginSubmit} className='form'>
        <div className='form__wrap'>
          <label className='form__label' htmlFor="email">Email</label>
          <input className='form__input' type="email" name="email" onChange={handleLoginForm} value={loginUser.email} placeholder='Enter your email' />
        </div>
        <div className='form__wrap'>
          <label className='form__label' htmlFor="password">Password</label>
          <input className='form__input' type={show ? "text" : "password"} name="password" onChange={handleLoginForm} value={loginUser.password} placeholder='Enter password' />
        </div>
        <button type="submit" className='button'>Continue</button>
        <p className='form__bottom'>
          Don`t have an account?
          <button className='form__links'> Sign Up</button>
        </p>
      </form>
      <button type="button" onClick={() => setShow((prev) => !prev)}>Show</button>
    </div>

  )

}

export default Login;
