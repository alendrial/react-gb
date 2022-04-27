import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export const Input: FC<InputProps> =({value, onChange, placeholder, ref}) => {
  return (
    <>
      <input
        className="InputText"
        value={value}
        onChange={onChange}
        style={{ marginRight: '20px' }}
      />
    </>
  );
};