// src/pages/relatorios.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function RelatoriosPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Relatórios</h1>
          {/* Conteúdo de Relatórios aqui */}
        </main>
      </div>
    </div>
  );
}

export default RelatoriosPage;
