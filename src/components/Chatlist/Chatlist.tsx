import React, { FC, useState } from 'react';
import { Chat } from '../../App';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './ChatList.scss'


interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chatName: string) => void;
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat, onDeleteChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name: name,
      });

      setName('');
    }
  };

  return (
    <>
      <ul className="chatList">
        {chatList.map((chat) => (
          <li className="chatListPos" key={chat.id}>
            <Link style={{textDecoration: 'none'}} to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => onDeleteChat(chat.name)} className="removeChatlist">&times;</button>
          </li>
        ))}
      </ul>
      <form onSubmit={ handleSubmit }>
        <input
          style={{ marginRight: '20px' }}
          className="InputText"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add new chat!</button>
      </form>
    </>
  );
};
