'use client';

import React, { useState } from 'react';
import Login from './login/page.tsx';
import Register from './register/page.tsx';
import Navibar from '../../../Navibar.tsx';
import './../../styles/styles.css';

const AccountPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='container'>
      <div className='content'>
        <div className='formContainer'>
          {isLoggedIn ? (
            <div className='loggedInMessage'>You are logged in.</div>
          ) : isSignup ? (
            <Register />
          ) : (
            <Login />
          )}
          <button className='toggleButton' onClick={handleToggleSignup}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <Navibar />
      </div>
    </div>
  );
};

export default AccountPage;
