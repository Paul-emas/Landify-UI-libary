import React from "react";
import PropTypes from "prop-types";

import "./CustomButton.css";

const CustomButton = ({ primary, children }) => {
  return (
    <button
      className={`${
        primary ? "bg-brand text-white" : "bg-brand-light bg-black text-brand"
      } px-5 py-3 rounded-md focus:outline-none btn text-sm`}
    >
      {children}
    </button>
  );
};

CustomButton.propType = {
  primary: PropTypes.bool,
  children: PropTypes.string,
};

CustomButton.defaultProps = {
  type: "default",
  primary: false,
};

export default CustomButton;
