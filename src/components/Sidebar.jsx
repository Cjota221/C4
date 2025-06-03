// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentes.css'; // Será criado depois, mas importamos para estrutura

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/vendas">Vendas</Link></li>
          <li><Link to="/despesas">Despesas</Link></li>
          <li><Link to="/lucrocerto">Lucro Certo</Link></li>
          <li><Link to="/metas">Metas</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
