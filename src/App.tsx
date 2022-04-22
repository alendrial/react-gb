import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Form, FormProps } from './components/FormFunc/Form/Form';

export const App = () => {
  return (
    <div className="form" style={{ marginTop: '20px' }}>
      <Form />
    </div>
  );
};
