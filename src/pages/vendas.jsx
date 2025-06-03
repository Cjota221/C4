import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function VendasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content vendas-page">
          <h1 className="titulo-pagina">Registro de Vendas</h1>
          
          <section className="form-container">
            <h2 className="subtitulo-secao">Nova Venda</h2>
            <form className="formulario-principal">
              <div className="input-group">
                <label htmlFor="produtoVendido">Produto/Serviço Vendido:</label>
                <input type="text" id="produtoVendido" name="produtoVendido" className="input-campo" placeholder="Selecione ou digite o nome" />
              </div>
              <div className="input-group">
                <label htmlFor="quantidadeVendida">Quantidade:</label>
                <input type="number" id="quantidadeVendida" name="quantidadeVendida" className="input-campo" defaultValue="1" />
              </div>
              <div className="input-group">
                <label htmlFor="valorVenda">Valor Total da Venda (R$):</label>
                <input type="number" id="valorVenda" name="valorVenda" className="input-campo" placeholder="Ex: 75.90" />
              </div>
              <div className="input-group">
                <label htmlFor="formaPagamento">Forma de Pagamento:</label>
                <select id="formaPagamento" name="formaPagamento" className="input-campo">
                  <option value="dinheiro">Dinheiro</option>
                  <option value="pix">Pix</option>
                  <option value="cartao_debito">Cartão de Débito</option>
                  <option value="cartao_credito">Cartão de Crédito</option>
                  <option value="boleto">Boleto</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="dataVenda">Data da Venda:</label>
                <input type="date" id="dataVenda" name="dataVenda" className="input-campo" />
              </div>
              <button type="button" className="botao-primario btn-registrar-venda">Registrar Venda</button>
            </form>
          </section>
          
          <section className="lista-container">
            <h2 className="subtitulo-secao">Vendas Recentes</h2>
            <div className="tabela-container">
              <table className="tabela-dados">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Produto/Serviço</th>
                    <th>Qtd.</th>
                    <th>Valor (R$)</th>
                    <th>Pagamento</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Linha de exemplo 1 */}
                  <tr>
                    <td>03/06/2025</td>
                    <td>Camiseta Estampada Floral</td>
                    <td>1</td>
                    <td>45.00</td>
                    <td>Pix</td>
                  </tr>
                  {/* Linha de exemplo 2 */}
                  <tr>
                    <td>02/06/2025</td>
                    <td>Consultoria de Marketing (2hs)</td>
                    <td>2</td>
                    <td>300.00</td>
                    <td>Cartão de Crédito</td>
                  </tr>
                  {/* Linha de exemplo 3 */}
                  <tr>
                    <td>01/06/2025</td>
                    <td>Bolsa de Couro + Carteira</td>
                    <td>1</td>
                    <td>180.00</td>
                    <td>Dinheiro</td>
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

export default VendasPage;
