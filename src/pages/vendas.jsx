// src/pages/vendas.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function VendasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Vendas</h1>
          {/* Conteúdo de Vendas aqui */}
        </main>
      </div>
    </div>
  );
}

export default VendasPage;
