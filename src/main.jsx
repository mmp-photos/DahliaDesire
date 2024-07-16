import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from './components/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/dahliaStyles.css';
import './assets/styles/photosStyles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
