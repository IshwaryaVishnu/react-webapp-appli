import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppClass from './AppClass';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
);

