import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/firebase';

export const SignUp: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      await signUp(login, password)
      navigate('/signin')
     } catch (error) {
      setError((error as Error).message);
     }
  };

  return (
    <>
      <h2>Sing Up</h2>
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
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: 'red' }}>Логин или пароль не верны</p>}
      </form>
    </>
  );
};
