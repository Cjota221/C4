import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CardResumo from '../components/CardResumo'; // Supondo que usaremos para resumo
import '../styles/dashboard.css'; // Estilos específicos do dashboard

function DashboardPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content dashboard-page">
          <h1 className="page-title">Dashboard Financeiro</h1>
          
          <section className="dashboard-resumo-cards">
            {/* Espaço para cards de resumo financeiro */}
            <CardResumo titulo="Saldo Atual (Simulado)" valor="R$ 1.250,75" />
            <CardResumo titulo="Receitas do Mês (Simulado)" valor="R$ 3.800,00" />
            <CardResumo titulo="Despesas do Mês (Simulado)" valor="R$ 1.550,25" />
            <CardResumo titulo="Lucro do Mês (Simulado)" valor="R$ 2.249,75" />
          </section>
          
          <section className="dashboard-grafico-area">
            <h2 className="section-title">Evolução Financeira (Placeholder)</h2>
            <div className="grafico-placeholder">
              {/* Espaço para gráfico futuro */}
              <p>Gráfico de evolução de receitas e despesas será exibido aqui.</p>
            </div>
          </section>

          <section className="dashboard-atalhos">
            <h2 className="section-title">Acesso Rápido</h2>
            <div className="atalhos-container">
              <button className="btn-atalho">Registrar Venda</button>
              <button className="btn-atalho">Nova Despesa</button>
              <button className="btn-atalho">Ver Produtos</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
