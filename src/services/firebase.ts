import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDs6PM8fna2fcqbEjhMDCLZSQbdpCiuEX8',
  authDomain: 'gb-ls9.firebaseapp.com',
  projectId: 'gb-ls9',
  storageBucket: 'gb-ls9.appspot.com',
  messagingSenderId: '1029160727322',
  appId: '1:1029160727322:web:38d5fc6aac78a0c71372a3',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const database = getDatabase(firebase);

export const userRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');

export const getChatsById = async (chatId: string) =>
  ref(database, `chats/${chatId}`);
