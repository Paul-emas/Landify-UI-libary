import React from "react";
// import PropTypes from "prop-types";

import { HeaderOne } from "./Headers/base";

const renderHeader = (name) => {
  switch (name) {
    case "HeaderOne":
      return <HeaderOne />;
    default:
      return <HeaderOne />;
  }
};

const Header = ({ name }) => renderHeader(name);

export default Header;
