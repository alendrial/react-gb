import React, { useState, FC, memo } from 'react';
import { Input } from '../InputMessage/Input';
import { Button } from '../Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply, ChatsState } from '../../store/chats/slice';
import { AUTHOR } from '../../constants';
import { nanoid } from 'nanoid';
import { createCurrentTime } from '../../store/chats/reducer';
import { AddMessage } from '../../store/chats/types';
import { ThunkDispatch } from 'redux-thunk';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (chatId && value) {
      dispatch(
        addMessageWithReply({
          chatId,
          message: {
            value,
            author: AUTHOR.USER,
            time: createCurrentTime(),
            id: nanoid(),
            botMessage: false,
          },
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
