import React, { FC } from 'react';
import './Message.scss';

interface MessageProps {
  message: {
    author: string;
    message: string;
    time: number;
  }
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
