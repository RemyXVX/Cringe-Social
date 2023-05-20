'use client';

import React, { useState } from 'react';

import Login from './login/page.tsx';
import Register from './register/page.tsx';
import Navibar from '../../../Navibar.tsx';

import './../../styles/styles.css';

const AccountPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className='container'>
      <div className='content'>
        <div className='formContainer'>
          {isSignup ? <Register /> : <Login />}
          <button
            className='toggleButton'
            onClick={handleToggleSignup}
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <Navibar />
      </div>
    </div>
  );
};

export default AccountPage;