import React from "react";

const Wrapper = ({ name, children }) => (
  <div className={`${name} py-3 shadow-lg border border-black bg-white`}>
    <div className="container mx-auto">
      <div className="flex justify-between">{children}</div>
    </div>
  </div>
);

export default Wrapper;
