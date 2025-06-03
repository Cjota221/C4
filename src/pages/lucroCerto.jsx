import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function LucroCertoPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content lucro-certo-page">
          <h1 className="page-title">Lucro Certo: Calculadora de Preço Ideal</h1>
          
          <section className="form-section calculadora-preco">
            <h2 className="section-title">Insira os Custos e a Margem Desejada</h2>
            <form className="form-lucro-certo">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="custoProduto">Custo do Produto (R$):</label>
                  <input type="text" id="custoProduto" name="custoProduto" placeholder="Ex: 25,50" />
                </div>
                <div className="form-group">
                  <label htmlFor="custoFixoUnitario">Custo Fixo Unitário (R$):</label>
                  <input type="text" id="custoFixoUnitario" name="custoFixoUnitario" placeholder="Ex: 2,00 (rateio)" />
                </div>
                <div className="form-group">
                  <label htmlFor="custoVariavelUnitario">Custo Variável Unitário (R$):</label>
                  <input type="text" id="custoVariavelUnitario" name="custoVariavelUnitario" placeholder="Ex: 1,50 (embalagem)" />
                </div>
                <div className="form-group">
                  <label htmlFor="freteTotal">Frete Total da Compra (R$):</label>
                  <input type="text" id="freteTotal" name="freteTotal" placeholder="Ex: 50,00" />
                </div>
                <div className="form-group">
                  <label htmlFor="quantidadePecasFrete">Quantidade de Peças no Frete:</label>
                  <input type="number" id="quantidadePecasFrete" name="quantidadePecasFrete" placeholder="Ex: 10" min="1" />
                </div>
                <div className="form-group">
                  <label htmlFor="margemLucro">Margem de Lucro Desejada (%):</label>
                  <input type="text" id="margemLucro" name="margemLucro" placeholder="Ex: 30 (para 30%)" />
                </div>
              </div>
              <button type="button" className="btn-submit btn-calcular">Calcular Preço Ideal</button>
            </form>
          </section>
          
          <section className="resultado-section">
            <h2 className="section-title">Resultado do Cálculo (Placeholder)</h2>
            <div className="resultado-calculo-placeholder">
              <p><strong>Custo Unitário Total:</strong> R$ [Valor]</p>
              <p><strong>Frete Unitário:</strong> R$ [Valor]</p>
              <p><strong>Preço de Venda Ideal:</strong> R$ [Valor]</p>
              <p><strong>Lucro por Unidade:</strong> R$ [Valor]</p>
              <p><strong>Margem Efetiva:</strong> [Valor]%</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LucroCertoPage;
