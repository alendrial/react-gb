import React, { FC, useCallback, useEffect } from 'react';
import { MessageList } from './../components/MessageList/MessageList';
import { Form } from './../components/Form/Form';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../constants';
import { ChatList } from '../components/Chatlist/Chatlist';
import { Chat, Messages, createCurrentTime } from '../App';
import { Navigate, useParams } from 'react-router-dom';
import '../App.scss';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chatName: string) => void;
}
export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
  onDeleteChat
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: `We received a new message from you ${AUTHOR.USER}`,
              botMessage: true,
              time: `${createCurrentTime()}`,
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  const addMessage = useCallback(
    (value: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author: AUTHOR.USER,
              value,
              time: `${createCurrentTime()}`,

            },
          ],
        }));
      }
    },
    [chatId, setMessages]
  );
  
  const deleteMessages = () => {
    if (chatId) {
      setMessages((prevChats) => ({
        ...prevChats,
        [chatId]: [],
      }));
    }
  };

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat}/>
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={addMessage}/>
      <button className="clearMsgButton" onClick={deleteMessages}>
        Clear messages
      </button>
    </>
  );
};
