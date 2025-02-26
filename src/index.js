import React from 'react';
import ReactDOM from 'react-dom/client';  // Altere para importar de 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Crie a raiz da aplicação com React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize a aplicação
root.render(
  <Router>
    <App />
  </Router>
);
