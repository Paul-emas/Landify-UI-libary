import React from 'react'

import Links from './Links';

export default {
    title: 'Application/Component Library/Navigation/Links',
    component: Links,
}

const Template = (args) => <Links {...args} />

export const NavigationLinks = Template.bind({});
NavigationLinks.args = {
    links: [
    { text: "About", url: "/about" },
    { text: "Product", url: "/about" },
    { text: "Pricing", url: "/about" },
    { text: "Resources", url: "/about" },
    { text: "Jobs", url: "/about" },
  ]
};