'use client';

import React, { useContext, useEffect } from "react";
import { createContext } from 'react';
import { useRouter } from 'next/router';

interface LoginContextProps {
  onLogin: () => void;
}

const LoginContext = createContext<LoginContextProps>({
  onLogin: () => {},
});

const Login = () => {
  const { onLogin } = useContext(LoginContext);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Fetch login data from the form inputs
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const id = formData.get('id') as string;

    try {
      const response = await fetch(`http://localhost:3000/api/dashboard/${id}`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        onLogin();
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className="">
      <div className="sign_form">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold mb-6">Sign-In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const router = useRouter();
  // Perform the redirect if the user is already logged in
  const response = await fetch('/api/check-login');
  if (response.ok) {
    router.push('/dashboard');
  }

  return {
    props: {},
  };
}


