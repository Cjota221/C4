import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function RelatoriosPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content relatorios-page">
          <h1 className="titulo-pagina">Relatórios Financeiros</h1>
          
          <section className="filtros-container">
            <h2 className="subtitulo-secao">Filtrar Relatório</h2>
            <form className="form-filtros">
              <div className="input-group">
                <label htmlFor="tipoRelatorio">Tipo de Relatório:</label>
                <select id="tipoRelatorio" name="tipoRelatorio" className="input-campo">
                  <option value="fluxo_caixa">Fluxo de Caixa</option>
                  <option value="vendas_periodo">Vendas por Período</option>
                  <option value="despesas_categoria">Despesas por Categoria</option>
                  <option value="lucratividade_produto">Lucratividade por Produto</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="periodoMes">Mês/Ano:</label>
                <input type="month" id="periodoMes" name="periodoMes" className="input-campo" />
              </div>
              <div className="input-group">
                <label htmlFor="dataInicio">Data Início (Opcional):</label>
                <input type="date" id="dataInicio" name="dataInicio" className="input-campo" />
              </div>
              <div className="input-group">
                <label htmlFor="dataFim">Data Fim (Opcional):</label>
                <input type="date" id="dataFim" name="dataFim" className="input-campo" />
              </div>
              <button type="button" className="botao-primario btn-gerar-relatorio">Gerar Relatório</button>
            </form>
          </section>
          
          <section className="relatorio-visualizacao-container">
            <h2 className="subtitulo-secao">Visualização do Relatório</h2>
            <div className="bloco-relatorio-resumido">
              <h3 className="titulo-relatorio-tipo">Fluxo de Caixa - Maio/2025 (Exemplo)</h3>
              <p className="item-relatorio">Total de Entradas: <span className="valor-positivo">R$ 5.250,00</span></p>
              <p className="item-relatorio">Total de Saídas: <span className="valor-negativo">R$ 2.130,00</span></p>
              <p className="item-relatorio destaque-saldo">Saldo do Período: <span className="valor-saldo">R$ 3.120,00</span></p>
              {/* Mais detalhes do relatório seriam exibidos aqui, talvez uma tabela */}
            </div>
            <div className="placeholder-tabela-detalhada">
              <p className="texto-placeholder">Tabela detalhada ou gráfico do relatório será exibida aqui.</p>
            </div>
            <button type="button" className="botao-secundario btn-exportar-relatorio">Exportar Relatório (PDF)</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default RelatoriosPage;
