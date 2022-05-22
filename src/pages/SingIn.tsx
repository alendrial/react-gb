import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../services/firebase';
import { changeAuth } from '../store/profile/slice';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const signInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      await logIn(login, password)
     } catch (error) {
      setError((error as Error).message);
     }
  };
  return (
    <>
      <h2>Sing in</h2>
      <form onSubmit={signInSubmit}>
        <p>Логин:</p>
        <input
          type="email"
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          placeholder="Enter your login"
        />
        <p>Пароль:</p>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your password"
        />
        <button type="submit">Log in</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};
