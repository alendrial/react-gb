import React, { useState, FC, memo } from 'react';
import { Input } from '../InputMessage/Input';
import { Button } from '../Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../store/chats/actions';
import { AUTHOR } from '../../constants';
import { nanoid } from 'nanoid';
import { createCurrentTime } from '../../store/chats/reducer';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (chatId && value) {
      // dispatch(addMessage(chatId, value));
      dispatch(
        addMessageWithReply(chatId, {
          value,
          author: AUTHOR.USER,
          time: createCurrentTime(),
          id: nanoid(),
          botMessage: false,
        })
      );
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        placeholder={'Enter something...'}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
