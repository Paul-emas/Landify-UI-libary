import React from 'react';
import CustomButton from '../../CustomButton';
import Heading from '../../_Headings/Heading';
import Navbar from '../../_Navbar';
import Iphone from '../../../assets/images/iphone-full.png';

import './base.css';

const HeaderThree = () => (
  <aside>
    <header className="header overflow-hidden relative circles circles-2">
      <div className="overlay">
        <div className="path">
          <span className="w-120 h-20 -left-10 bottom-64 transform rt-10 absolute bg-turquoise"></span>
          <span className="w-150 h-20 -right-5 b-90 transform rt-10 absolute bg-brand-lighter"></span>
          <span className="w-60 h-20 right-10 b-96 transform rt-10 absolute bg-brand-light"></span>
        </div>
        <span className="w-72 h-20 -left-10 b-60 transform -translate-y-30 rt-10 absolute bg-brand-light"></span>
        <span className="w-72 h-20 -right-5 b-92 transform -translate-y-30 rt-10 absolute bg-turquoise"></span>
      </div>
      <Navbar type="SIXTH_NAVBAR" transparent="border-b bg-white" />
      <div className="container mx-auto px-20">
        <div className="pt-48">
          <div className="grid grid-cols-2 pt-10">
            <div className="text-left">
              <Heading className="text-6xl 2xl:text-7xl">
                Organise projects. Get more done.
              </Heading>
              <CustomButton primary size="large" className="mt-10">
                Get Started
              </CustomButton>
            </div>
            <div className="relative flex justify-end">
              <img
                src={Iphone}
                alt="hero-bg"
                className="transform -translate-y-28 relative h-bg right-0 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  </aside>
);

export default HeaderThree;
