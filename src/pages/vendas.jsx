import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import TabelaFinanceira from '../components/TabelaFinanceira'; // Para listar vendas

function VendasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content vendas-page">
          <h1 className="page-title">Registro de Vendas</h1>
          
          <section className="form-section">
            <h2 className="section-title">Nova Venda</h2>
            <form className="form-venda">
              <div className="form-group">
                <label htmlFor="produtoVendido">Produto Vendido:</label>
                <input type="text" id="produtoVendido" name="produtoVendido" placeholder="Nome do produto ou serviço" />
              </div>
              <div className="form-group">
                <label htmlFor="quantidadeVendida">Quantidade:</label>
                <input type="number" id="quantidadeVendida" name="quantidadeVendida" defaultValue="1" min="1" />
              </div>
              <div className="form-group">
                <label htmlFor="valorVenda">Valor da Venda (R$):</label>
                <input type="text" id="valorVenda" name="valorVenda" placeholder="0,00" />
              </div>
              <div className="form-group">
                <label htmlFor="dataVenda">Data da Venda:</label>
                <input type="date" id="dataVenda" name="dataVenda" />
              </div>
              <div className="form-group">
                <label htmlFor="clienteNome">Nome do Cliente (Opcional):</label>
                <input type="text" id="clienteNome" name="clienteNome" placeholder="Nome do cliente" />
              </div>
              <button type="submit" className="btn-submit">Registrar Venda</button>
            </form>
          </section>
          
          <section className="lista-section">
            <h2 className="section-title">Vendas Registradas</h2>
            <div className="tabela-placeholder">
              {/* <TabelaFinanceira colunas={['Data', 'Produto', 'Qtd', 'Valor', 'Cliente']} dados={[]} /> */}
              <p>A tabela de vendas será exibida aqui.</p>
              <p>Exemplo de linha: 01/06/2025 | Produto X | 2 | R$ 50,00 | Maria</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default VendasPage;
