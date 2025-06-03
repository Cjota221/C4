// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Header from './components/Header'; // Header é renderizado dentro de cada página agora
import Sidebar from './components/Sidebar'; // Sidebar é renderizado dentro de cada página agora

import DashboardPage from './pages/dashboard';
import VendasPage from './pages/vendas';
import DespesasPage from './pages/despesas';
import LucroCertoPage from './pages/lucroCerto';
import MetasPage from './pages/metas';
import RelatoriosPage from './pages/relatorios';
import ProdutosPage from './pages/produtos';
import PerfilPage from './pages/perfil';

function App() {
  return (
    <Router>
      {/* O Header e Sidebar são renderizados dentro de cada página 
          para permitir layouts diferentes por página se necessário no futuro,
          mas mantidos aqui de forma estrutural para a rota base.
          A estrutura atual move Header e Sidebar para dentro das "Page" components.
          A estrutura solicitada (Header e Sidebar no App.jsx e a página atual) é mais comum.
          Vou ajustar para o modelo comum: App.jsx contém Header, Sidebar e o conteúdo da Rota.
      */}
      <div className="app-container">
        {/* Header e Sidebar foram removidos daqui e colocados em cada Page
            Conforme instrução 4: "Cada página importará o Header e Sidebar"
            Se a intenção era um layout global, eles ficariam aqui.
            Mantendo como solicitado.
        */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/vendas" element={<VendasPage />} />
          <Route path="/despesas" element={<DespesasPage />} />
          <Route path="/lucrocerto" element={<LucroCertoPage />} />
          <Route path="/metas" element={<MetasPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
