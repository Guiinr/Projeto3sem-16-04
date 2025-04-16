import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importações de CSS globais
import './styles/globals.css';       // Estilos globais e variáveis
import './styles/animations.css';    // Animações e keyframes

// Importe o CSS do Font Awesome se estiver usando
import 'remixicon/fonts/remixicon.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: Medição de performance
reportWebVitals();