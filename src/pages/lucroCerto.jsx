// src/pages/lucroCerto.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function LucroCertoPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Lucro Certo</h1>
          {/* Conteúdo de Lucro Certo aqui */}
        </main>
      </div>
    </div>
  );
}

export default LucroCertoPage;
