import React from 'react';

import { ReactComponent as Instagram } from '../../assets/svgs/instagram.svg';
import { ReactComponent as Dribble } from '../../assets/svgs/dribble.svg';
import { ReactComponent as Twitter } from '../../assets/svgs/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/svgs/youtube.svg';

const icons = [Instagram, Dribble, Twitter, Youtube];

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      {icons.map((Icon, idx) => (
        <a
          href={idx}
          className={`relative overflow-hidden w-9 h-9 text-center transform hover:bg-brand hover:scale-110 duration-100 py-2 rounded-full`}
        >
          <span className="overlay absolute w-full h-full inset-0 bg-white opacity-30 -z-10 hover:opacity-0"></span>
          <Icon className="mx-auto" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
