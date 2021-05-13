import React from 'react';
import CustomButton from '../../CustomButton';
import Heading from '../../_Headings/Heading';
import Navbar from '../../_Navbar';
import GirlBg from '../../../assets/images/girl-bg.png';

import './base.css';

const HeaderTwo = () => (
  <aside>
    <header className="header relative circles">
      <Navbar type="FIFTH_NAVBAR" transparent />
      <div className="container mx-auto px-20">
        <div className="pt-48">
          <div className="grid grid-cols-2 pt-10">
            <div className="text-left max-w-md 2xl:max-w-lg">
              <Heading className="text-6xl 2xl:text-7xl">
                Landing page UI kit
              </Heading>
              <p className="text-lg text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
              <CustomButton primary size="large" className="mt-10">
                Get Started
              </CustomButton>
            </div>
            <div className="relative">
              <span className="absolute lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 lg:top-28 2xl:top-36 lg:-left-6 2xl:-left-8 rounded-full circle-yellow"></span>
              <span className="absolute lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 lg:bottom-8 2xl:bottom-0 transform left-1/2 -translate-x-1/2 rounded-full circle-blue"></span>
              <img
                src={GirlBg}
                alt="hero-bg"
                className="transform -translate-y-28 object-contain h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  </aside>
);

export default HeaderTwo;
