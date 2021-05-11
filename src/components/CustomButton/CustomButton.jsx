import React from "react";
import PropTypes from "prop-types";

import "./CustomButton.css";

const CustomButton = ({ primary, size, children, ...props }) => {
  const mode = primary
    ? "bg-brand text-white"
    : "bg-brand-light bg-black text-brand";
  return (
    <button
      type="button"
      className={`${
        (size, mode)
      } px-5 py-3 rounded-md focus:outline-none btn text-sm`}
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
