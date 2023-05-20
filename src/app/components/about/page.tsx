import { Inter } from 'next/font/google';
import React from "react";

import Navibar from '@/Navibar';

const inter = Inter({ subsets: ['latin'] });

const About = () => {
  return(
    <>
    <h1>Hello y'all!</h1>
    <Navibar />
    </>
  )
}

export default About;