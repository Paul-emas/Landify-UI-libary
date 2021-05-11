import React from "react";

const Wrapper = ({ transparent, children }) => (
  <div className={`${transparent ? "" : "border-b bg-white"} py-3`}>
    <div className="container mx-auto">
      <div className="flex justify-between">{children}</div>
    </div>
  </div>
);

export default Wrapper;
