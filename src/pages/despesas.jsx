// src/pages/despesas.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DespesasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Despesas</h1>
          {/* Conteúdo de Despesas aqui */}
        </main>
      </div>
    </div>
  );
}

export default DespesasPage;
