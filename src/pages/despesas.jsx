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
          <h1 className="titulo-pagina">Controle de Despesas</h1>
          
          <section className="form-container">
            <h2 className="subtitulo-secao">Registrar Nova Despesa</h2>
            <form className="formulario-principal">
              <div className="input-group">
                <label htmlFor="descricaoDespesa">Descrição da Despesa:</label>
                <input type="text" id="descricaoDespesa" name="descricaoDespesa" className="input-campo" placeholder="Ex: Compra de material, Aluguel" />
              </div>
              <div className="input-group">
                <label htmlFor="valorDespesa">Valor da Despesa (R$):</label>
                <input type="number" id="valorDespesa" name="valorDespesa" className="input-campo" placeholder="Ex: 120.00" />
              </div>
              <div className="input-group">
                <label htmlFor="categoriaDespesa">Categoria:</label>
                <select id="categoriaDespesa" name="categoriaDespesa" className="input-campo">
                  <option value="">Selecione uma categoria</option>
                  <option value="custo_fixo">Custo Fixo</option>
                  <option value="custo_variavel">Custo Variável</option>
                  <option value="fornecedores">Fornecedores</option>
                  <option value="impostos">Impostos e Taxas</option>
                  <option value="marketing">Marketing e Publicidade</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="dataDespesa">Data da Despesa:</label>
                <input type="date" id="dataDespesa" name="dataDespesa" className="input-campo" />
              </div>
              <button type="button" className="botao-primario btn-registrar-despesa">Adicionar Despesa</button>
            </form>
          </section>
          
          <section className="lista-container">
            <h2 className="subtitulo-secao">Despesas Recentes</h2>
            <div className="tabela-container">
              <table className="tabela-dados">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Linha de exemplo 1 */}
                  <tr>
                    <td>01/06/2025</td>
                    <td>Compra de embalagens para envio</td>
                    <td>Custo Variável</td>
                    <td>75.50</td>
                  </tr>
                  {/* Linha de exemplo 2 */}
                  <tr>
                    <td>30/05/2025</td>
                    <td>Pagamento de frete fornecedor</td>
                    <td>Fornecedores</td>
                    <td>120.00</td>
                  </tr>
                  {/* Linha de exemplo 3 */}
                  <tr>
                    <td>28/05/2025</td>
                    <td>Assinatura software de design</td>
                    <td>Custo Fixo</td>
                    <td>49.90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DespesasPage;
