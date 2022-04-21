import React, { FC } from 'react';
import './Message.scss';

export interface Message {
  id: number;
  author: string;
  message: string;
  time: number;
  robotMessage?: string;
}

interface MessageProps {
  message: Message;
}

export const Message: FC<MessageProps> = (props) => {
  return (
    <>
      <p className="author">{props.message.author}</p>
      <p className="text">{props.message.message}</p>
      <p className="text">{props.message.time}</p>
    </>
  );
};
