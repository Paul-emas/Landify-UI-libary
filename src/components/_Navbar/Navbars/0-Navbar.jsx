import { React, Logo, Wrapper, Links, CustomButton } from './base';

const BaseNavbar = ({ className }) => (
  <Wrapper className={className}>
    <a href="/home">
      <Logo />
    </a>
    <div className="px-8">
      <Links />
    </div>
    <div className="ml-auto">
      <span className="inline-block space-x-3">
        <CustomButton className="ml-auto">Login</CustomButton>
        <CustomButton primary>Sign up</CustomButton>
      </span>
    </div>
  </Wrapper>
);

export default BaseNavbar;
