import React from 'react';
import PropTypes from 'prop-types';

// Navbars
import {
  BaseNavbar,
  BaseSecondNavbar,
  BaseThirdNavbar,
  BaseFourthNavbar,
  BaseFifthNavbar,
  BaseSixthNavbar,
} from './Navbars/base';

const renderNavbar = (type, transparent) => {
  const mode = transparent ? '' : 'bg-white border-b';
  switch (type) {
    case 'SECOND_NAVBAR':
      return <BaseSecondNavbar className={mode} />;
    case 'THIRD_NAVBAR':
      return <BaseThirdNavbar className={mode} />;
    case 'FOURTH_NAVBAR':
      return <BaseFourthNavbar className={mode} />;
    case 'FIFTH_NAVBAR':
      return <BaseFifthNavbar className={mode} />;
    case 'SIXTH_NAVBAR':
      return <BaseSixthNavbar className={mode} />;
    default:
      return <BaseNavbar className={mode} />;
  }
};

const Navbar = ({ type, transparent }) => renderNavbar(type, transparent);

Navbar.propType = {
  type: PropTypes.oneOfType([
    'SECOND_NAVBAR',
    'THIRD_NAVBAR',
    'FOURTH_NAVBAR',
    'FIFTH_NAVBAR',
    'SIXTH_NAVBAR',
  ]),
  transparent: PropTypes.bool,
};

export default Navbar;
