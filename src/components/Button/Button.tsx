import React, { FC } from 'react';

interface ButtonProps {
  disabled: boolean;
}

export const Button: FC<ButtonProps> = ({ disabled }) => {
  return (
    <button disabled={disabled} style={{ backgroundColor: '#4cc49c' }}>
      Add message!
    </button>
  );
};
