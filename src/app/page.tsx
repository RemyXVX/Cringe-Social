import React from 'react';
import { Inter } from 'next/font/google';

import Navibar from '../Navibar';
import Info from '../Info';
import Header from '../Header';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="container mx-auto px-6 md:px-10">
      <div className="formContainer">
        <Header />
        <Info />
        <Navibar />
      </div>
    </div>
  );
};

export default Home;
