// src/pages/produtos.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function ProdutosPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Produtos</h1>
          {/* Conteúdo de Produtos aqui */}
        </main>
      </div>
    </div>
  );
}

export default ProdutosPage;
