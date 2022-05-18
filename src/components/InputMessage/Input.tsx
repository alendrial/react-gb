import React, { FC } from 'react';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className="InputText"
      value={value}
      onChange={onChange}
      style={{ marginRight: '20px' }}
    />
  );
};
