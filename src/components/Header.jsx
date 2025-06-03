// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentes.css'; // Será criado depois, mas importamos para estrutura

function Header() {
  return (
    <header className="app-header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>C4 App 👑</h1> {/* Adicionando um emoji de coroa simples por enquanto */}
      </Link>
      {/* Ícone pode ser adicionado aqui depois */}
    </header>
  );
}

export default Header;
