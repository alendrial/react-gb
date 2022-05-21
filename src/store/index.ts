import { compose, combineReducers } from 'redux';
import { chatReducer, ChatsState } from './chats/reducer';
import { ProfileState } from './profile/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/slice';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type StoreState = ReturnType<typeof rootReducer>;

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
};

export const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
