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