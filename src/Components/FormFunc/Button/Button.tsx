import React, { FC } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

interface ButtonProps {
  disabled: boolean;
  click: () => void;
  style: string;
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.click}
      disabled={props.disabled}
      style={{ backgroundColor: '#4cc49c' }}
    >
      {props.name}
    </button>
  );
};
