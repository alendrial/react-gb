import React, { FC } from 'react';
import { Message } from './Message/Message';
import './MessageList.scss';

interface MessageListProps {
  messages: Message[];
}


export const MessageList: FC<MessageListProps> = ({ messages }) => {
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
        {messages.map((message, index) => (
          <li
            key={index}
            className={message.botMessage ? 'message__system' : 'message'}
            style={styles.li}
          >
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
