import { nanoid } from 'nanoid';
import { Reducer } from 'redux';
import { AUTHOR } from '../../constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT, DELETE_MESSAGES } from './actions';
import { ChatsActions, Message } from './types';

export const createCurrentTime = () => {
  const time = new Date();
  return `${time.getHours()} : ${
    (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  }`;
};

export interface ChatsState {
  [key: string]: Message[];
}

const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'Hello geekbrains',
      time: `${createCurrentTime()}`,
    },
  ],
};

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state: ChatsState = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case DELETE_CHAT: {
      const defaultChat = { ...state };
      delete defaultChat[action.chatId];
      return defaultChat;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            author: action.message.author,
            value: action.message.value,
            time: `${createCurrentTime()}`,
            botMessage: action.message.botMessage,
          },
        ],
      };
    }
    case DELETE_MESSAGES: {
      return {
        ...state,
        [action.chatId]: [],
      };
    }

    default:
      return state;
  }
};
