import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CardResumo from '../components/CardResumo';
import { formatarMoeda } from '../utils/formatarMoeda'; // Importar formatador
import '../styles/dashboard.css';

function DashboardPage() {
  // Valores simulados para os cards
  const saldoAtualSimulado = 1250.75;
  const receitasMesSimulado = 3800.00;
  const despesasMesSimulado = 1550.25;
  const lucroMesSimulado = receitasMesSimulado - despesasMesSimulado;

  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content dashboard-page">
          <h1 className="page-title">Dashboard Financeiro</h1>
          
          <section className="dashboard-resumo-cards">
            <CardResumo titulo="Saldo Atual (Simulado)" valor={formatarMoeda(saldoAtualSimulado)} />
            <CardResumo titulo="Receitas do Mês (Simulado)" valor={formatarMoeda(receitasMesSimulado)} />
            <CardResumo titulo="Despesas do Mês (Simulado)" valor={formatarMoeda(despesasMesSimulado)} />
            <CardResumo titulo="Lucro do Mês (Simulado)" valor={formatarMoeda(lucroMesSimulado)} />
          </section>
          
          <section className="dashboard-grafico-area">
            <h2 className="section-title">Evolução Financeira (Placeholder)</h2>
            <div className="grafico-placeholder">
              <p>Gráfico de evolução de receitas e despesas será exibido aqui.</p>
            </div>
          </section>

          <section className="dashboard-atalhos">
            <h2 className="section-title">Acesso Rápido</h2>
            <div className="atalhos-container">
              {/* No futuro, usar <Link> do react-router-dom ou history.push */}
              <button className="btn-atalho" onClick={() => alert('Navegar para Registro de Venda')}>Registrar Venda</button>
              <button className="btn-atalho" onClick={() => alert('Navegar para Nova Despesa')}>Nova Despesa</button>
              <button className="btn-atalho" onClick={() => alert('Navegar para Ver Produtos')}>Ver Produtos</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
