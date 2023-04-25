import { Inter } from 'next/font/google'
import React from 'react';

import Navibar from './components/Navibar';
import Info from './components/Info';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return(
    <React.Fragment>
    <Header />
    <Info />
    <Navibar />
  </React.Fragment>
  );
}

export default Home;