import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../utils/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/slice';
import { selectName, selectVisible } from '../store/profile/selectors';
import style from './Profile/Profile.module.css';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <>
      <div className={theme === 'light' ? style.light : style.dark}>
        <h2>Profile</h2>
        <div>
          <p>
            {theme === 'light' ? 'Light' : 'Dark'}
            <button onClick={toggleTheme}>Change Theme</button>
          </p>
        </div>
        <div>
          <p>{name}</p>
          <input type="checkbox" name="" id="" checked={visible} />
          <button onClick={() => dispatch(toggleProfile())}>
            Change visible
          </button>

          <input
            type="text"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <button onClick={() => dispatch(changeName(value))}>
            Change name
          </button>
        </div>
      </div>
    </>
  );
};
