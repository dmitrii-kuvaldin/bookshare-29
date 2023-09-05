import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { initUserAuth } from './initUser.ts';
import { userRegistr } from './userAuthOperation/userAuthOperation.ts';

const BASEURL = "http://localhost:8080"


const Registration: React.FC = () => {

    const [createNewUser, setCreateNewUser] = useState(initUserAuth);
    const [show, setShow] = useState(false);
    

    const handleRegistrationForm = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCreateNewUser((prev) => ({
            ...prev, [name]:value
        }))
    }

    const handleRegistrationSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() 
        userRegistr(createNewUser);
    }

    return (
        <div className='container'>
                <h2 className='content__title'>
                    Create your account
                </h2>
                <p>
                It’s free and easy 
                </p>
                <form onSubmit={handleRegistrationSubmit} className='form'>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">Email</label>
                        <input autoComplete='on' className='form__input' type="email" name="email" onChange={handleRegistrationForm} value={createNewUser.email} placeholder='Enter your email' />
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="password">Password</label>
                        <input autoComplete='on' className='form__input' type={show?"text":"password"} name="password" onChange={handleRegistrationForm} value={createNewUser.password} placeholder='Enter password' />
                        <span>Must be 8 characters at least</span>
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="password">Repeat password</label>
                        <input className='form__input' type="password" placeholder='Repeat password' />
                    </div>
                    <div className='form__wrap'>
                        <input className='form__checkbox' type="checkbox" name="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" id="checkbox-id" value="yes" />
                        <label htmlFor="checkbox-label">
                            By creating an account means you agree to the 
                            <Link className='form__links' to="/termsAndConditions"> Terms and Conditions</Link>
                        </label>
                    </div>
                    <button type="submit" className='button'>Sign Up</button>
                    <p className='form__bottom'>
                    Already have an account?
                    <Link className='form__links' to="/login"> Login</Link>
                </p>
                </form>
                <button type="button" onClick={()=>setShow((prev) => !prev)}>Show</button>

        </div>
    )
    
}

export default Registration;