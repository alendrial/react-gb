import React from 'react';
import './../../App.scss'
import { Button } from './Button';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'click' },
  }, 
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  name: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'Click me',
};
