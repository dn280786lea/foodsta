import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import GlobalStyles from './assets/styles/GlobalStyles';
import './index.css';
import 'modern-normalize';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/foodsta">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
