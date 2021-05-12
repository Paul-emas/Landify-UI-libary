import React from "react";
import PropTypes from "prop-types";

import "./CustomButton.css";

const CustomButton = ({ primary, size, className, children, ...props }) => {
  console.log(size);
  const mode = primary
    ? "bg-brand text-white"
    : "bg-brand-light bg-black text-brand";

  return (
    <button
      type="button"
      className={`${mode} ${size} ${className} rounded-md focus:outline-none active:bg-brand-dark focus:hidden`}
      {...props}
    >
      {children}
    </button>
  );
};

CustomButton.propType = {
  primary: PropTypes.bool,
  children: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  type: "default",
  primary: false,
  size: "medium",
};

export default CustomButton;
