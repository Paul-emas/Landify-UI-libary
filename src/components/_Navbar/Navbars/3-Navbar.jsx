import { React, Logo, Wrapper, Links, CustomButton } from './base';

const BaseFourthNavbar = ({ className }) => (
  <Wrapper className={className}>
    <Links />
    <a href="/home">
      <Logo />
    </a>
    <div className="inline-block space-x-3">
      <CustomButton className="ml-auto">Login</CustomButton>
      <CustomButton primary>Sign up</CustomButton>
    </div>
  </Wrapper>
);

export default BaseFourthNavbar;
