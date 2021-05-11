import React from "react";
import PropTypes from "prop-types";

// Navbars
import {
  BaseNavbar,
  BaseSecondNavbar,
  BaseThirdNavbar,
  BaseFourthNavbar,
  BaseFifthNavbar,
  BaseSixthNavbar,
} from "./Navbars/base";

const renderNavbar = (type) => {
  switch (type) {
    case "SECOND_NAVBAR":
      return <BaseSecondNavbar />;
    case "THIRD_NAVBAR":
      return <BaseThirdNavbar />;
    case "FOURTH_NAVBAR":
      return <BaseFourthNavbar />;
    case "FIFTH_NAVBAR":
      return <BaseFifthNavbar />;
    case "SIXTH_NAVBAR":
      return <BaseSixthNavbar />;
    default:
      return <BaseNavbar />;
  }
};

const Navbar = ({ type }) => renderNavbar(type);

Navbar.propType = {
  type: PropTypes.oneOfType([
    "SECOND_NAVBAR",
    "THIRD_NAVBAR",
    "FOURTH_NAVBAR",
    "FIFTH_NAVBAR",
    "SIXTH_NAVBAR",
  ]),
};

export default Navbar;
