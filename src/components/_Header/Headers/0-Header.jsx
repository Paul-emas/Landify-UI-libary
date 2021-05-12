import React from "react";
import CustomButton from "../../CustomButton";
import Navbar from "../../_Navbar";

import "./base.css";

const HeaderOne = () => (
  <aside className="relative pb-64 overflow-hidden bg-white">
    <header className="header">
      <Navbar type="SIXTH_NAVBAR" />
      <div className="container mx-auto lg:pb-32 xl:pb-60">
        <div className="lg:pt-20 xl:pt-28 max-w-6xl mx-auto text-center">
          <h1 className="text-7xl leading-relaxed font-extrabold">
            Track your product sales from anywhere, anytime.
          </h1>
          <CustomButton className="mt-8" size="large" primary>
            Start selling
          </CustomButton>
        </div>
      </div>
      <div className="iphone absolute hidden lg:block w-full pt-36 pb-28 bottom-0"></div>
    </header>
  </aside>
);

export default HeaderOne;
