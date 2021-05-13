import React from 'react';
import Heading from '../../_Headings/Heading';
import CustomButton from '../../CustomButton';
import Navbar from '../../_Navbar';

import Dashboard from '../../../assets/images/dashboard.png';

const HeaderFour = () => (
  <header className="header relative pb-64 overflow-hidden bg-white">
    <Navbar type="FOURTH_NAVBAR" />
    <div className="container mx-auto px-20">
      <div className="pt-48">
        <div className="grid grid-cols-2 pt-10">
          <div className="text-left max-w-md 2xl:max-w-lg">
            <Heading className="text-6xl 2xl:text-7xl">
              Landing page UI kit
            </Heading>
            <p className="text-lg text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <CustomButton primary size="large" className="mt-10">
              Get Started
            </CustomButton>
          </div>
          <div className="relative">
            <div className="circle-bg w-96 h-96 absolute -bottom-8 transform lg:scale-150 2xl:scale-200 -translate-x-1/2 left-1/2 bg-brand-lighter rounded-full"></div>
          </div>
          <img
            src={Dashboard}
            alt="dashboard-bg"
            className="absolute z-20 h-80 transform -translate-y-1/2 top-1/2 right-0"
          />
        </div>
      </div>
    </div>
  </header>
);

export default HeaderFour;
