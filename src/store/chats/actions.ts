import { Dispatch } from 'redux';
import { AUTHOR } from '../../constants';
import { createCurrentTime } from './reducer';
import {
  AddChat,
  AddMessage,
  DeleteChat,
  DeleteMessages,
  Message,
  MessageState,
} from './types';
export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DELETE_CHAT = 'CHAT::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DELETE_MESSAGES = 'CHATS::DELETE_MESSAGES';

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const deleteChat: DeleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMessage: AddMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

export const deleteMessages: DeleteMessages = (chatId) => ({
  type: DELETE_MESSAGES,
  chatId,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply =
  (chatId: string, message: MessageState): any => (dispatch: any) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            value: `We received a new message from you ${AUTHOR.USER}`,
            botMessage: true,
            time: `${createCurrentTime()}`,
          })
        );
      }, 1000);
    }
  };
