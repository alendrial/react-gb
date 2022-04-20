import React, { FC } from 'react';
import { Message } from './Message/Message';
import './Chat.scss';

interface ChatProps {
  post: messagesList[],
  index: number, 
}

export const Chat: FC<ChatProps> = (props) => {
  const styles = {
    ul: {
      listStyle: 'none',
    },
    li: {
      color: '#f72d77',
    },
  };

  return (
    <div className="chatBox">
      <ul style={styles.ul} className="msg-block">
        {props.post.map((message, index) => (
          <li
            key={index}
            className={message.robotMessage ? 'message__system' : 'message'}
            style={styles.li}
          >
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
