import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
