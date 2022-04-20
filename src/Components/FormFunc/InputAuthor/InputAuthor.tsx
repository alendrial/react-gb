import React, { FC } from 'react';
import './InputAuthor.scss';

interface InputAuthorProps {
  author: string,
  change: () => void,
}

export const InputAuthor: FC<InputAuthorProps> = (props) => {
  return (
    <>
      <input
        className="InputAuthor"
        type="text"
        value={props.author}
        placeholder="Username"
        onChange={props.change}
      />
    </>
  );
};


