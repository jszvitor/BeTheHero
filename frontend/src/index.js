import React from 'react';
import ReactDOM from 'react-dom'; // DOM é a árvore de elementos. meu navegador
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // tá renderizando/ colocando em tela o App
// a gente está colocando um App (componente do react) dentro da div com id root
// um componente do React é uma função que retorna HTML

