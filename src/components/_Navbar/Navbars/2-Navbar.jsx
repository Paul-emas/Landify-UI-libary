import { React, Logo, Wrapper, Links } from "./base";

const BaseThirdNavbar = () => (
  <Wrapper>
    <a href="/home">
      <Logo />
    </a>
    <div className="px-8">
      <Links />
    </div>
  </Wrapper>
);

export default BaseThirdNavbar;
