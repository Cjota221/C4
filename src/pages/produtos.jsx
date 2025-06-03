import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function ProdutosPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content produtos-page">
          <h1 className="titulo-pagina">Cadastro de Produtos e Serviços</h1>
          
          <section className="form-container">
            <h2 className="subtitulo-secao">Adicionar Novo Item</h2>
            <form className="formulario-principal">
              <div className="input-group">
                <label htmlFor="nomeProduto">Nome do Produto/Serviço:</label>
                <input type="text" id="nomeProduto" name="nomeProduto" className="input-campo" placeholder="Ex: Camiseta Estampada, Consultoria" />
              </div>
              <div className="input-group">
                <label htmlFor="custoUnitario">Custo Unitário (R$):</label>
                <input type="number" id="custoUnitario" name="custoUnitario" className="input-campo" placeholder="Ex: 15.00 (opcional para serviços)" />
              </div>
              <div className="input-group">
                <label htmlFor="precoVenda">Preço de Venda (R$):</label>
                <input type="number" id="precoVenda" name="precoVenda" className="input-campo" placeholder="Ex: 35.00" />
              </div>
              <div className="input-group">
                <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
                <input type="number" id="quantidadeEstoque" name="quantidadeEstoque" className="input-campo" placeholder="Ex: 50 (deixe 0 se não aplicável)" />
              </div>
              <button type="button" className="botao-primario btn-salvar-produto">Salvar Produto</button>
            </form>
          </section>
          
          <section className="lista-container">
            <h2 className="subtitulo-secao">Meus Produtos e Serviços</h2>
            <div className="tabela-container">
              <table className="tabela-dados">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Custo (R$)</th>
                    <th>Preço Venda (R$)</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Linha de exemplo 1 */}
                  <tr>
                    <td>Camiseta Estampada Floral</td>
                    <td>18.50</td>
                    <td>45.00</td>
                    <td>32</td>
                    <td><button type="button" className="botao-editar">Editar</button></td>
                  </tr>
                  {/* Linha de exemplo 2 */}
                  <tr>
                    <td>Consultoria de Marketing Digital (Hora)</td>
                    <td>N/A</td>
                    <td>150.00</td>
                    <td>N/A</td>
                    <td><button type="button" className="botao-editar">Editar</button></td>
                  </tr>
                  {/* Linha de exemplo 3 */}
                  <tr>
                    <td>Bolsa de Couro Artesanal</td>
                    <td>45.00</td>
                    <td>120.00</td>
                    <td>15</td>
                    <td><button type="button" className="botao-editar">Editar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="observacao-lista">Listagem simulada. A funcionalidade de listagem e edição será implementada.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProdutosPage;
