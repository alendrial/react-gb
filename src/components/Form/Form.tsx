import React, { useState, FC, memo } from 'react';
import { Input } from '../InputMessage/Input';
import { Button } from '../Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/chats/actions';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams()
  const dispatch = useDispatch();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (chatId) {
      dispatch(addMessage(chatId, value));
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        placeholder={"Enter something..."}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
