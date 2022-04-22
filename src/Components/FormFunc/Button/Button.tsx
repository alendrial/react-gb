import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  disabled: boolean;
  click: () => void;
  name: string;
  className: string;
  type: string;
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
