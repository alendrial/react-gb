import React, { FC } from 'react';
import homeImg from './assets/react-logo-vector.svg'

export const Home: FC = () => {
    return (
        <>
        <h2 style={{ textAlign: 'center' }}>Home</h2>
        <img src={homeImg} style={{ width: '50%'}} alt="" />
        </>
    )
}