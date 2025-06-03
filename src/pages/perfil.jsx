// src/pages/perfil.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function PerfilPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Perfil</h1>
          {/* Conteúdo de Perfil aqui */}
        </main>
      </div>
    </div>
  );
}

export default PerfilPage;
