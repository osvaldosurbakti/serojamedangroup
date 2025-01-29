import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './output.css'; // Impor file Tailwind CSS Anda

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
