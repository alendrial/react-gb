import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  message: string,
  change: () => void,
}

export const Input: FC<InputProps> = (props) => {
  return (
    <>
      <input
        className="InputText"
        type="text"
        value={props.message}
        placeholder="Enter something..."
        onChange={props.change}
        style={{ marginRight: '20px' }}
      />
    </>
  );
};