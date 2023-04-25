import React from "react";
import { NextPage } from 'next';
import '../../styles/styles.css'

import NaviBar from '../Navibar.tsx';

interface Props {}

const SignUp: NextPage = (props): JSX.Element => {
  return (
    <div>
      <div className="py-4 px-48">
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <input type="email" placeholder="youremail@email.com" />
            <input type="password" placeholder="password" />
            <input className="bg-grey-500 text-black font-bold py-2 px-4 border-b-4 border-grey-700 hoover:border-grey-500 rounded" type="submit" value="Login" />
          </form>
        </div>
      </div>
      <NaviBar />
    </div>
  );
}

export default SignUp;
