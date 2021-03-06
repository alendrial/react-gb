import './index.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './index.scss';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
