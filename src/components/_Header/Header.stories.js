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