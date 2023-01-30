import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <ApiProvider api={apiSlice}>
      <App />
     </ApiProvider>

  </React.StrictMode>
);

