// src/pages/metas.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function MetasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Metas</h1>
          {/* Conteúdo de Metas aqui */}
        </main>
      </div>
    </div>
  );
}

export default MetasPage;
