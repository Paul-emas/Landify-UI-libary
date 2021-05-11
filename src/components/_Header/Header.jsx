import React from "react";
import CustomButton from "../CustomButton";
import Navbar from "../_Navbar";

const Header = () => (
  <div className="h-screen bg-white">
    <Navbar type="SIXTH_NAVBAR" />
    <div className="container mx-auto">
      <div className="pt-36 max-w-6xl mx-auto text-center">
        <h1 className="text-7xl leading-relaxed font-extrabold">
          Track your product sales from anywhere, anytime.
        </h1>
        <CustomButton primary>Start Selling</CustomButton>
      </div>
    </div>
  </div>
);

export default Header;
