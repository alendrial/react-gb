import { Dispatch } from 'redux';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT, DELETE_MESSAGES } from './actions';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMessage>
  | ReturnType<DeleteMessages>

export type Message = {
  value: string;
  author: string;
  time: string;
  botMessage?: boolean;
}

export type MessageState = Message & {
  id: string;
};

export interface Chat {
  id: string;
  name: string;
}

// export interface Message {
//   id: string;
//   author: string;
//   value: string;
//   time: string;
//   botMessage?: boolean;
// }

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
  message: Message
) => {
  type: typeof ADD_MESSAGE;
  chatId: string;
  message: Message;
};

export type DeleteMessages = (chatId: string) => {
  type: typeof DELETE_MESSAGES;
  chatId: string;
}