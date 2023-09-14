import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

reportWebVitals();
