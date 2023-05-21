import { Inter } from 'next/font/google';
import React from 'react';

import Navibar from '@/Navibar';

const inter = Inter({ subsets: ['latin'] });

const Contact = () => {
  return(
    <div>
    <h1>Hello yall!</h1>
    <Navibar />
    </div>
  )
};

export default Contact;
