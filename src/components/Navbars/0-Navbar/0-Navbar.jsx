import React from "react";
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import Links from "../../../components/Links";
import CustomButton from "../../../components/CustomButton";

const BaseNavbar = () => (
  <div className="base-navbar py-3 shadow-lg border border-black bg-white">
    <div className="container mx-auto">
      <div className="flex justify-between">
        <a href="">
          <Logo />
        </a>
        <Links />
        <div className="inline-flex justify-self-end space-x-3">
          <CustomButton>Login</CustomButton>
          <CustomButton primary>Sign up</CustomButton>
        </div>
      </div>
    </div>
  </div>
);

export default BaseNavbar;
