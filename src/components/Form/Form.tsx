import React, { useState, FC, memo } from 'react';
import { Input } from '../InputMessage/Input';
import { Button } from '../Button/Button';

interface FormProps {
  addMessage: (a: string) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        placeholder="Enter something..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
