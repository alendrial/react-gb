import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/chats/slice';
import { selectChatList } from '../../store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name) {
      dispatch(addChat({ name }));
      setName('');
    }
  };

  return (
    <>
      <ul className="chatList">
        {chatList.map((chat) => (
          <li className="chatListPos" key={chat.id}>
            <Link style={{ textDecoration: 'none' }} to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button
              onClick={() => dispatch(deleteChat({ chatId: chat.name }))}
              className="removeChatlist"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
