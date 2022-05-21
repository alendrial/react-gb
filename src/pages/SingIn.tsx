import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth } from '../store/profile/slice'

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const signInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    if (login === 'gb' && password === 'gb') {
      dispatch(changeAuth(true))
      setLogin('')
      setPassword('')
    } else {
      setError(true);
    }
  }
  return (
    <>
      <h2>Sing in</h2>
      <form onSubmit={signInSubmit}>
        <p>Логин:</p>
        <input
          type="text"
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          placeholder="Enter your login"
        />
        <p>Логин:</p>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your password"
        />
        <button type="submit">Log in</button>
        {error && <p style={{ color: 'red' }}>Логин или пароль не верны</p>}
      </form>
    </>
  );
};
