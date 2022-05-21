import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { selectAuth } from '../../store/profile/selectors';
import { changeAuth } from '../../store/profile/slice';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    to: '/articles',
    name: 'Articles',
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  return (
    <header>
      <ul className="navigationBar">
        {navigate.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {auth ? (
        <button onClick={() => dispatch(changeAuth(false))}>logout</button>
      ) : (
        <Link to="/signin">Sing In</Link>
      )}

      <main>
        <Outlet />
      </main>
    </header>
  );
};
