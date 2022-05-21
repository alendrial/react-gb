import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MessageState } from './types';

import { AUTHOR } from '../../constants';
import { nanoid } from 'nanoid';

export const createCurrentTime = () => {
  const time = new Date();
  return `${time.getHours()} : ${
    (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  }`;
};

export interface ChatsState {
  [key: string]: MessageState[];
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

const chatsSlice = createSlice({
  initialState,
  name: 'chats',
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    addMessage(
      state,
      action: PayloadAction<{ chatId: string; message: MessageState }>
    ) {
      const { chatId } = action.payload;
      const { value, author, botMessage, time } = action.payload.message;
      state[chatId].push({
        author,
        id: nanoid(),
        value,
        time,
        botMessage,
      });
    },
    deleteChat(state, action: PayloadAction<{ chatId: string }>) {
      delete state[action.payload.chatId];
    },
    deleteMessages(state, action: PayloadAction<{ chatId: string }>) {
      state[action.payload.chatId] = [];
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'chats/addMessageWithReply',
  async (
    { chatId, message }: { chatId: string; message: MessageState },
    { dispatch }
  ) => {
    dispatch(addMessage({ chatId, message }));
    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatId,
            message: {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: `We received a new message from you ${AUTHOR.USER}`,
              botMessage: true,
              time: `${createCurrentTime()}`,
            },
          })
        );
      }, 1000);
    }
  }
);

export const { addChat, addMessage, deleteChat, deleteMessages } =
  chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
