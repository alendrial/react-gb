import React, { FC } from 'react';
import './Message.scss';

export interface Message {
  id?: number;
  author: string;
  value: string;
  time: string;
  botMessage?: boolean;
}

interface MessageProps {
  message: Message;
}

export const Message: FC<MessageProps> = ({ message }) => {
  return (
    <>
      <p className="author">{message.author}</p>
      <p className="text">{message.value}</p>
      <p className="text">{message.time}</p>
    </>
  );
};
