import React, { FC } from 'react';

interface InputAuthorProps {
  author: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputAuthor: FC<InputAuthorProps> = (props) => {
  return (
    <input
      className="InputAuthor"
      type="text"
      value={props.author}
      placeholder="Username"
      onChange={props.change}
    />
  );
};
