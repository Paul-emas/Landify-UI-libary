import React from 'react'

import Header from './Header';

export default {
    title: 'Application/Component Library/Headers/Header',
    component: Header,
}

const Template = (args) => <Header {...args}/>

export const Header_One = Template.bind({});
Header_One.args = {
    name: 'HeaderOne',
}

export const Header_Two = Template.bind({});
Header_Two.args = {
    name: 'HeaderTwo',
}

export const Header_Three = Template.bind({});
Header_Three.args = {
    name: 'HeaderThree',
}

export const Header_Four = Template.bind({});
Header_Four.args = {
    name: 'HeaderFour',
}