import React from 'react';
// import PropTypes from "prop-types";

import { HeaderOne, HeaderTwo, HeaderThree, HeaderFour } from './Headers/base';

const renderHeader = (name) => {
  switch (name) {
    case 'HeaderTwo':
      return <HeaderTwo />;
    case 'HeaderThree':
      return <HeaderThree />;
    case 'HeaderFour':
      return <HeaderFour />;
    default:
      return <HeaderOne />;
  }
};

const Header = ({ name }) => renderHeader(name);

export default Header;
