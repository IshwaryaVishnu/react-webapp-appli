import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppClass() {
  return <h1>Student List!</h1>;
}

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
);

