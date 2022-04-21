import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  message: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.ForwardedRef<HTMLInputElement>;
}

export const Input: FC<InputProps> = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        className="InputText"
        type="text"
        value={props.message}
        placeholder="Enter something..."
        onChange={props.change}
        style={{ marginRight: '20px' }}
        ref={ref}
      />
    </>
  );
});