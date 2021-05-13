import Navbar from './Navbar';

export default {
    title: 'Application/Component Library/Navbars/Navbar',
    component: Navbar,
}

const Template = (args) => <Navbar {...args} />;

const BaseNav = Template.bind({});
BaseNav.args = {
  type: 'BASE_NAVBAR',
  transparent: false
};

const SecondNav = Template.bind({});
SecondNav.args = {
    type: 'SECOND_NAVBAR',
    transparent: true
};

const ThirdNav = Template.bind({});
ThirdNav.args = {
    type: 'THIRD_NAVBAR',
    transparent: true
};

const FourthNav = Template.bind({});
FourthNav.args = {
    type: 'FOURTH_NAVBAR',
    transparent: true
};

const FifthNav = Template.bind({});
FifthNav.args = {
    type: 'FIFTH_NAVBAR',
    transparent: true
};

const SixthNav = Template.bind({});
SixthNav.args = {
    type: 'SIXTH_NAVBAR',
    transparent: false
};

export { BaseNav, SecondNav, ThirdNav, FourthNav, FifthNav, SixthNav };