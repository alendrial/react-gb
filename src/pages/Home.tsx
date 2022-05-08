import React, { FC } from 'react';
import homeImg from './assets/reactLogo.svg'

export const Home: FC = () => {
    console.log(homeImg)
    return (
        <>
        <h2 style={{ textAlign: 'center' }}>Home</h2>
        <img src={homeImg} style={{ width: '50%', height: '50%' }} alt="" />
        </>
    )
}