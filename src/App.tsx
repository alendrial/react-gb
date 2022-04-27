import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header/Header';
import { Chats } from './pages/Chats';
import { ChatList } from './components/Chatlist/Chatlist'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { AUTHOR } from './constants';
import { nanoid } from 'nanoid';

export interface Chat {
  id: string;
  name: string;
}

export const createCurrentTime = () => {
  let time = new Date();
  return `${time.getHours()} : ${
    (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  }`;
};

const defaultMessage: Messages = {
  default: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'Hello geekbrains',
      time: `${createCurrentTime()}`,
    },
  ],
};

export interface Message {
  id: string;
  author: string;
  value: string;
  time: string;
  botMessage?: boolean;
}

export interface Messages {
  [key: string]: Message[];
}


export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(defaultMessage);

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.name]: [],
    });
  };

  const onDeleteChat = (chatName: string) => {
    const allChats = { ...messages };
    delete allChats[chatName];
    setMessages({
      ...allChats,
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route
              index
              element={<ChatList chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />}
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
