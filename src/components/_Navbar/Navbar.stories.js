import Navbar from './Navbar';

export default {
    title: 'Application/Component Library/Navbars/Navbar',
    component: Navbar,
}

const Template = (args) => <Navbar {...args} />;

const BaseNav = Template.bind({});
BaseNav.args = {
  type: 'BASE_NAVBAR',
};

const SecondNav = Template.bind({});
SecondNav.args = {
    type: 'SECOND_NAVBAR',
};

const ThirdNav = Template.bind({});
ThirdNav.args = {
    type: 'THIRD_NAVBAR',
};

const FourthNav = Template.bind({});
FourthNav.args = {
    type: 'FOURTH_NAVBAR',
};

const FifthNav = Template.bind({});
FifthNav.args = {
    type: 'FIFTH_NAVBAR',
};

const SixthNav = Template.bind({});
SixthNav.args = {
    type: 'SIXTH_NAVBAR',
};

export { BaseNav, SecondNav, ThirdNav, FourthNav, FifthNav, SixthNav };