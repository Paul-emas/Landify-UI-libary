import React from "react";
import PropTypes from "prop-types";

import "./Links.style.css";

export const Links = ({ links }) => (
  <nav>
    <div className="flex space-x-10">
      {links.map(({ text, url }) => (
        <a key={text} className="text-sm py-3 hover:text-brand" href={url}>
          {text}
        </a>
      ))}
    </div>
  </nav>
);

Links.propType = {
  links: PropTypes.array,
};

Links.defaultProps = {
  links: [
    { text: "About", url: "/about" },
    { text: "Product", url: "/about" },
    { text: "Pricing", url: "/about" },
    { text: "Resources", url: "/about" },
    { text: "Jobs", url: "/about" },
  ],
};

export default Links;
