import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT, DELETE_MESSAGES } from './actions';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMessage>
  | ReturnType<DeleteMessages>

export interface Chat {
  id: string;
  name: string;
}

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

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT;
  chatName: string;
};

export type DeleteChat = (chatId: string) => {
  type: typeof DELETE_CHAT;
  chatId: string;
};

export type AddMessage = (
  chatId: string,
  message: string
) => {
  type: typeof ADD_MESSAGE;
  chatId: string;
  message: string;
};

export type DeleteMessages = (chatId: string) => {
  type: typeof DELETE_MESSAGES;
  chatId: string;
}