import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DespesasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content despesas-page">
          <h1 className="page-title">Controle de Despesas</h1>
          
          <section className="form-section">
            <h2 className="section-title">Registrar Nova Despesa</h2>
            <form className="form-despesa">
              <div className="form-group">
                <label htmlFor="descricaoDespesa">Descrição da Despesa:</label>
                <input type="text" id="descricaoDespesa" name="descricaoDespesa" placeholder="Ex: Compra de material, Aluguel" />
              </div>
              <div className="form-group">
                <label htmlFor="valorDespesa">Valor (R$):</label>
                <input type="text" id="valorDespesa" name="valorDespesa" placeholder="0,00" />
              </div>
              <div className="form-group">
                <label htmlFor="dataDespesa">Data da Despesa:</label>
                <input type="date" id="dataDespesa" name="dataDespesa" />
              </div>
              <div className="form-group">
                <label htmlFor="categoriaDespesa">Categoria (Opcional):</label>
                <select id="categoriaDespesa" name="categoriaDespesa">
                  <option value="">Selecione</option>
                  <option value="fixa">Custo Fixo</option>
                  <option value="variavel">Custo Variável</option>
                  <option value="fornecedor">Fornecedor</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <button type="submit" className="btn-submit">Adicionar Despesa</button>
            </form>
          </section>
          
          <section className="lista-section">
            <h2 className="section-title">Últimas Despesas Lançadas</h2>
            <ul className="lista-despesas-placeholder">
              <li>
                <span className="despesa-data">01/06/2025</span> - <span className="despesa-descricao">Compra de Embalagens</span> - <span className="despesa-valor">R$ 75,50</span>
              </li>
              <li>
                <span className="despesa-data">30/05/2025</span> - <span className="despesa-descricao">Pagamento de Frete</span> - <span className="despesa-valor">R$ 120,00</span>
              </li>
              <li>
                <span className="despesa-data">28/05/2025</span> - <span className="despesa-descricao">Material de Escritório</span> - <span className="despesa-valor">R$ 45,90</span>
              </li>
              {/* Mais itens de despesa simulados aqui */}
            </ul>
            <p className="empty-state-placeholder">Nenhuma despesa registrada ainda ou a lista será carregada aqui.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DespesasPage;
