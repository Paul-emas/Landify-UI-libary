import React from 'react';
import CustomButton from './CustomButton';

export default {
  title: 'Application/Component Library/CustomButton',
  component: CustomButton,
   argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <CustomButton {...args}>Click Me</CustomButton>

export const Default = Template.bind({})
Default.args = {
    primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
    primary: false,
}