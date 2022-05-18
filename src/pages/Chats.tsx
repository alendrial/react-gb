import React, { FC } from 'react';
import { MessageList } from './../components/MessageList/MessageList';
import { Form } from './../components/Form/Form';
import { ChatList } from '../components/Chatlist/Chatlist';
import { Navigate, useParams } from 'react-router-dom';
import '../App.scss';
import style from './Chats/Chats.module.scss';
import { WithClasses } from '../HOC/WitchClasses';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../store/chats/selectors';
import { deleteMessages } from '../store/chats/actions';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setMessages({
  //         ...messages,
  //         [chatId]: [
  //           ...messages[chatId],
  //           {
  //             id: nanoid(),
  //             author: AUTHOR.BOT,
  //             value: `We received a new message from you ${AUTHOR.USER}`,
  //             botMessage: true,
  //             time: `${createCurrentTime()}`,
  //           },
  //         ],
  //       });
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [chatId, messages, setMessages]);

  // const deleteMessages = () => {
  //   if (chatId) {
  //     setMessages((prevChats) => ({
  //       ...prevChats,
  //       [chatId]: [],
  //     }));
  //   }
  // };

  const handleDeleteMessages = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (chatId) {
      dispatch(deleteMessages(chatId));
    }
  };

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <MessageListWithClass
        messages={chatId ? chats[chatId] : []}
        classes={style.border}
      />
      <Form />
      <button className="clearMsgButton" onClick={handleDeleteMessages}>
        Clear messages
      </button>
    </>
  );
};
