import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// CardResumo seria importado aqui se fosse usado como componente separado apenas visual
// import CardResumo from '../components/CardResumo'; 

function DashboardPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content dashboard-page">
          <h1 className="titulo-pagina">Meu Dashboard Financeiro</h1>
          
          <section className="cards-container">
            <div className="card-resumo">
              <h3 className="card-titulo">Saldo Atual</h3>
              <p className="card-valor">R$ 1.250,75</p>
            </div>
            <div className="card-resumo">
              <h3 className="card-titulo">Vendas no Mês</h3>
              <p className="card-valor">R$ 3.800,00</p>
            </div>
            <div className="card-resumo">
              <h3 className="card-titulo">Lucro no Mês</h3>
              <p className="card-valor">R$ 2.249,75</p>
            </div>
            <div className="card-resumo">
              <h3 className="card-titulo">Meta do Mês</h3>
              <p className="card-valor">R$ 3.000,00 <span className="card-detalhe">(75% alcançado)</span></p>
            </div>
          </section>
          
          <section className="grafico-container">
            <h2 className="subtitulo-secao">Evolução Financeira</h2>
            <div className="placeholder-grafico">
              <p className="texto-placeholder">Área reservada para o gráfico de evolução.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
