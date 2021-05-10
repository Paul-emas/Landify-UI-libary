import React from 'react'

import BaseNavbar from './0-Navbar';

export default {
    title:  'Application/Component Library/Navigation/Navbars/BaseNavbar',
    component: BaseNavbar,
}


export const Template = (args) => <BaseNavbar {...args}/>
const _BASENAV = Template.bind({});