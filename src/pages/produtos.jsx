import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import TabelaFinanceira from '../components/TabelaFinanceira'; // Para listar produtos

function ProdutosPage() {
  const colunasProdutos = ['Nome', 'Custo (R$)', 'Preço Venda (R$)', 'Estoque', 'Ações'];
  const produtosFicticios = [
    { nome: 'Produto Alfa', custo: '15,00', precoVenda: '30,00', estoque: 50 },
    { nome: 'Serviço Beta', custo: 'N/A', precoVenda: '100,00', estoque: 'N/A' },
    { nome: 'Produto Gama', custo: '22,50', precoVenda: '49,90', estoque: 25 },
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content produtos-page">
          <h1 className="page-title">Cadastro e Gestão de Produtos/Serviços</h1>
          
          <section className="form-section">
            <h2 className="section-title">Adicionar Novo Produto/Serviço</h2>
            <form className="form-produto">
              <div className="form-group">
                <label htmlFor="nomeProduto">Nome:</label>
                <input type="text" id="nomeProduto" name="nomeProduto" placeholder="Nome do produto ou serviço" />
              </div>
              <div className="form-group">
                <label htmlFor="custoProdutoCad">Custo Unitário (R$):</label>
                <input type="text" id="custoProdutoCad" name="custoProdutoCad" placeholder="0,00 (opcional para serviços)" />
              </div>
              <div className="form-group">
                <label htmlFor="precoVendaProduto">Preço de Venda (R$):</label>
                <input type="text" id="precoVendaProduto" name="precoVendaProduto" placeholder="0,00" />
              </div>
              <div className="form-group">
                <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
                <input type="number" id="quantidadeEstoque" name="quantidadeEstoque" placeholder="0 (deixe em branco se não aplicável)" min="0" />
              </div>
               <div className="form-group">
                <label htmlFor="unidadeMedida">Unidade de Medida (Opcional):</label>
                <input type="text" id="unidadeMedida" name="unidadeMedida" placeholder="Ex: Un, Kg, Peça, Hora" />
              </div>
              <button type="submit" className="btn-submit">Salvar Produto</button>
            </form>
          </section>
          
          <section className="lista-section">
            <h2 className="section-title">Produtos/Serviços Cadastrados</h2>
            <div className="tabela-placeholder">
              {/* <TabelaFinanceira colunas={colunasProdutos} dados={produtosFicticios.map(p => ({...p, acoes: 'Editar | Excluir'}))} /> */}
              <table>
                <thead>
                  <tr>{colunasProdutos.map(col => <th key={col}>{col}</th>)}</tr>
                </thead>
                <tbody>
                  {produtosFicticios.map((prod, idx) => (
                    <tr key={idx}>
                      <td>{prod.nome}</td>
                      <td>{prod.custo}</td>
                      <td>{prod.precoVenda}</td>
                      <td>{prod.estoque}</td>
                      <td><button className="btn-link">Editar</button> | <button className="btn-link btn-link-danger">Excluir</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="empty-state-placeholder">Nenhum produto cadastrado ainda.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProdutosPage;
