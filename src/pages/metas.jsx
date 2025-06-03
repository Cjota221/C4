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
          <h1 className="page-title">Simulador de Metas de Lucro</h1>
          
          <section className="form-section simulador-metas">
            <h2 className="section-title">Defina sua Meta</h2>
            <form className="form-metas">
              <div className="form-group">
                <label htmlFor="lucroDesejado">Quanto você quer lucrar (R$)?</label>
                <input type="text" id="lucroDesejado" name="lucroDesejado" placeholder="Ex: 2000,00" />
              </div>
              <div className="form-group">
                <label htmlFor="lucroMedioProduto">Lucro Médio por Produto/Venda (R$):</label>
                <input type="text" id="lucroMedioProduto" name="lucroMedioProduto" placeholder="Ex: 50,00" />
              </div>
              <button type="button" className="btn-submit btn-simular">Simular Meta</button>
            </form>
          </section>
          
          <section className="resultado-section">
            <h2 className="section-title">Resultado da Simulação (Placeholder)</h2>
            <div className="resultado-simulacao-placeholder">
              <p>Para lucrar <strong>R$ [Lucro Desejado]</strong>, com um lucro médio de <strong>R$ [Lucro Médio]</strong> por produto/venda, você precisará:</p>
              <p><strong>Vender aproximadamente:</strong> [Número] unidades/serviços.</p>
              <p><em>Este é um cálculo estimado.</em></p>
            </div>
          </section>

          <section className="sugestoes-metas">
             <h2 className="section-title">Sugestões de Metas</h2>
             <ul className="lista-sugestoes">
                <li>Definir meta de R$ 500,00 de lucro este mês.</li>
                <li>Aumentar o lucro médio por venda em 10%.</li>
                <li>Realizar 50 vendas no próximo período.</li>
             </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MetasPage;
