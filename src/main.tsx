import { createRoot } from 'react-dom/client';
import 'src/assets/styles/index.scss';
import React from 'react';
import App from './App';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error('Root element not found');
}
