import HomeImage from './assets/reactLogo.svg';
import React, { FC } from 'react';

export const Home: FC = () => {
  console.log(HomeImage);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Home</h2>
      <img src={HomeImage}></img>
    </>
  );
};
