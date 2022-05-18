import { AddChat, AddMessage, DeleteChat, DeleteMessages } from './types';

export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DELETE_CHAT = 'CHAT::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DELETE_MESSAGES = 'CHATS::DELETE_MESSAGES'

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
})

