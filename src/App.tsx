import React, { FC } from 'react';
import './App.scss';
import { Form, FormProps } from './components/FormFunc/Form/Form';

export const App: FC<FormProps> = () => {
  return (
    <div className="form" style={{ marginTop: '20px' }}>
      <Form />
    </div>
  );
};
