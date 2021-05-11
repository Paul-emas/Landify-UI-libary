import React from "react";

import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Dribble } from "../../assets/svgs/dribble.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/svgs/youtube.svg";

const icons = [Instagram, Dribble, Twitter, Youtube];

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      {icons.map((Icon, idx) => (
        <a
          href={idx}
          className={`bg-gray-200 w-9 h-9 text-center transform hover:scale-110 active:opacity-0 duration-100 py-2  rounded-full`}
        >
          <Icon className="mx-auto" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
