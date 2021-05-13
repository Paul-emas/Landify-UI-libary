import React from 'react';

const Wrapper = ({ className, children }) => (
  <nav className={`${className} py-3`}>
    <div className="container mx-auto px-20">
      <div className="flex justify-between">{children}</div>
    </div>
  </nav>
);

export default Wrapper;
