// src/pages/dashboard.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';

function DashboardPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content">
          <h1>Página de Dashboard</h1>
          {/* Conteúdo do Dashboard aqui */}
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
