import { React, Logo, Wrapper, Links } from "./base";
import GooglePlay from "../../../assets/images/google-play.png";
import AppleStore from "../../../assets/images/apple-store.png";

const BaseSixthNavbar = () => (
  <Wrapper>
    <a href="/">
      <Logo />
    </a>
    <div className="px-8">
      <Links />
    </div>
    <div className="ml-auto">
      <span className="flex space-x-3">
        <a href="/">
          <img src={GooglePlay} alt="" srcset="" className="h-11" />
        </a>
        <a href="/">
          <img src={AppleStore} alt="" srcset="" className="h-11" />
        </a>
      </span>
    </div>
  </Wrapper>
);

export default BaseSixthNavbar;
