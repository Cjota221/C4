import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function MetasPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content metas-page">
          <h1 className="titulo-pagina">Simulador de Metas</h1>
          
          <section className="form-container">
            <h2 className="subtitulo-secao">Simular Meta de Lucro</h2>
            <form className="formulario-principal">
              <div className="input-group">
                <label htmlFor="lucroDesejado">Quanto você quer lucrar (R$)?</label>
                <input type="number" id="lucroDesejado" name="lucroDesejado" className="input-campo" placeholder="Ex: 2000.00" />
              </div>
              <div className="input-group">
                <label htmlFor="lucroMedioUnidade">Lucro Médio por Unidade Vendida (R$):</label>
                <input type="number" id="lucroMedioUnidade" name="lucroMedioUnidade" className="input-campo" placeholder="Ex: 50.00" />
              </div>
              <div className="input-group">
                <label htmlFor="precoMedioUnidade">Preço Médio por Unidade Vendida (R$):</label>
                <input type="number" id="precoMedioUnidade" name="precoMedioUnidade" className="input-campo" placeholder="Ex: 150.00" />
              </div>
              <button type="button" className="botao-primario btn-calcular-meta">Calcular Meta</button>
            </form>
          </section>
          
          <section className="resultado-container">
            <h2 className="subtitulo-secao">Resultado da Simulação</h2>
            <div className="bloco-resultado">
              <p className="resultado-item">Para alcançar o lucro desejado, você precisa vender:</p>
              <p className="resultado-item destaque-resultado"><span className="valor-resultado">0</span> peças/unidades.</p>
              <p className="resultado-item">Valor total de vendas estimado: <span className="valor-resultado">R$ 0,00</span>.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MetasPage;
