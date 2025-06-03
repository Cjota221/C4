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
          <h1 className="titulo-pagina">Lucro Certo: Calculadora de Preço</h1>
          
          <section className="form-container">
            <h2 className="subtitulo-secao">Calcular Preço de Venda</h2>
            <form className="formulario-principal">
              <div className="input-group">
                <label htmlFor="custoProduto">Custo do Produto (R$):</label>
                <input type="number" id="custoProduto" name="custoProduto" className="input-campo" placeholder="Ex: 25.50" />
              </div>
              <div className="input-group">
                <label htmlFor="custoFixo">Custo Fixo Unitário (R$):</label>
                <input type="number" id="custoFixo" name="custoFixo" className="input-campo" placeholder="Ex: 2.00" />
              </div>
              <div className="input-group">
                <label htmlFor="custoVariavel">Custo Variável Unitário (R$):</label>
                <input type="number" id="custoVariavel" name="custoVariavel" className="input-campo" placeholder="Ex: 1.50" />
              </div>
              <div className="input-group">
                <label htmlFor="freteTotal">Frete Total da Compra (R$):</label>
                <input type="number" id="freteTotal" name="freteTotal" className="input-campo" placeholder="Ex: 50.00" />
              </div>
              <div className="input-group">
                <label htmlFor="quantidadePecas">Quantidade de Peças (no frete):</label>
                <input type="number" id="quantidadePecas" name="quantidadePecas" className="input-campo" placeholder="Ex: 10" />
              </div>
              <div className="input-group">
                <label htmlFor="margemLucro">Margem de Lucro Desejada (%):</label>
                <input type="number" id="margemLucro" name="margemLucro" className="input-campo" placeholder="Ex: 30" />
              </div>
              <button type="button" className="botao-primario btn-calcular">Calcular Preço Ideal</button>
            </form>
          </section>
          
          <section className="resultado-container">
            <h2 className="subtitulo-secao">Resultado do Cálculo</h2>
            <div className="bloco-resultado">
              <p className="resultado-item">Custo Unitário Total: <span className="valor-resultado">R$ 0,00</span></p>
              <p className="resultado-item">Frete Unitário: <span className="valor-resultado">R$ 0,00</span></p>
              <p className="resultado-item destaque-resultado">Preço de Venda Ideal: <span className="valor-resultado">R$ 0,00</span></p>
              <p className="resultado-item">Lucro Bruto por Unidade: <span className="valor-resultado">R$ 0,00</span></p>
              <p className="resultado-item">Margem de Lucro Efetiva: <span className="valor-resultado">0.00%</span></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LucroCertoPage;
