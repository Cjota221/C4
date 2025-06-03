import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import TabelaFinanceira from '../components/TabelaFinanceira'; // Para exibir dados

function RelatoriosPage() {
  // Dados fictícios para a tabela simulada
  const dadosFicticios = [
    { data: '01/06/2025', tipo: 'Entrada', descricao: 'Venda Produto A', valor: 'R$ 150,00' },
    { data: '01/06/2025', tipo: 'Saída', descricao: 'Compra de Material', valor: 'R$ 45,00' },
    { data: '02/06/2025', tipo: 'Entrada', descricao: 'Venda Serviço B', valor: 'R$ 300,00' },
    { data: '03/06/2025', tipo: 'Saída', descricao: 'Pagamento de Frete', valor: 'R$ 25,00' },
    { data: '03/06/2025', tipo: 'Entrada', descricao: 'Venda Produto C', valor: 'R$ 80,00' },
  ];
  const colunasRelatorio = ['Data', 'Tipo', 'Descrição', 'Valor'];


  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content relatorios-page">
          <h1 className="page-title">Relatórios Financeiros</h1>
          
          <section className="filtros-exportacao-section">
            <h2 className="section-title">Filtros e Opções</h2>
            <div className="filtros-container">
              <div className="form-group">
                <label htmlFor="periodoRelatorio">Período:</label>
                <select id="periodoRelatorio" name="periodoRelatorio">
                  <option value="mensal">Este Mês</option>
                  <option value="trimestral">Este Trimestre</option>
                  <option value="anual">Este Ano</option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="tipoRelatorio">Tipo de Relatório:</label>
                <select id="tipoRelatorio" name="tipoRelatorio">
                  <option value="fluxoCaixa">Fluxo de Caixa</option>
                  <option value="dre">DRE Simplificado</option>
                  <option value="vendas">Relatório de Vendas</option>
                  <option value="despesas">Relatório de Despesas</option>
                </select>
              </div>
              <button type="button" className="btn-secondary btn-filtrar">Aplicar Filtros</button>
            </div>
            <div className="exportacao-container">
              <button type="button" className="btn-secondary btn-exportar">Exportar (PDF/CSV)</button>
            </div>
          </section>
          
          <section className="tabela-relatorio-section">
            <h2 className="section-title">Visualização do Relatório (Simulado)</h2>
            <div className="tabela-placeholder">
              {/* <TabelaFinanceira colunas={colunasRelatorio} dados={dadosFicticios} /> */}
               <table>
                <thead>
                  <tr>
                    {colunasRelatorio.map(col => <th key={col}>{col}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {dadosFicticios.map((linha, index) => (
                    <tr key={index}>
                      <td>{linha.data}</td>
                      <td>{linha.tipo}</td>
                      <td>{linha.descricao}</td>
                      <td>{linha.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="empty-state-placeholder">Selecione os filtros para gerar o relatório.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default RelatoriosPage;
