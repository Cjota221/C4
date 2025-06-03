import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { simularMetaVendasCompleta, gerarSugestoesDeMeta } from '../utils/metas';
import { formatarMoeda } from '../utils/formatarMoeda';
import { numeroInvalido, campoVazio, numeroPositivoInvalido } from '../utils/validarCampos';

function MetasPage() {
  const [lucroDesejado, setLucroDesejado] = useState('');
  const [lucroMedioPorProduto, setLucroMedioPorProduto] = useState('');
  const [precoVendaMedioPorProduto, setPrecoVendaMedioPorProduto] = useState(''); // Novo campo

  const [resultadoSimulacao, setResultadoSimulacao] = useState(null);
  const [sugestoes, setSugestoes] = useState([]);
  const [erros, setErros] = useState({});

  useEffect(() => {
    // Carregar sugestões iniciais (poderia ser baseado em dados do usuário no futuro)
    setSugestoes(gerarSugestoesDeMeta()); 
  }, []);

  const validarFormulario = () => {
    const novosErros = {};
    if (numeroPositivoInvalido(lucroDesejado)) novosErros.lucroDesejado = "Lucro desejado deve ser um número positivo.";
    if (numeroPositivoInvalido(lucroMedioPorProduto)) novosErros.lucroMedioPorProduto = "Lucro médio deve ser um número positivo.";
    if (numeroPositivoInvalido(precoVendaMedioPorProduto)) novosErros.precoVendaMedioPorProduto = "Preço de venda médio deve ser um número positivo.";

    if (campoVazio(lucroDesejado)) novosErros.lucroDesejado = "Campo obrigatório.";
    if (campoVazio(lucroMedioPorProduto)) novosErros.lucroMedioPorProduto = "Campo obrigatório.";
    if (campoVazio(precoVendaMedioPorProduto)) novosErros.precoVendaMedioPorProduto = "Campo obrigatório para estimar venda bruta.";


    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSimularMeta = () => {
    if (!validarFormulario()) {
      setResultadoSimulacao(null);
      return;
    }

    const ld = parseFloat(lucroDesejado);
    const lmpp = parseFloat(lucroMedioPorProduto);
    const pvmp = parseFloat(precoVendaMedioPorProduto);

    const simulacao = simularMetaVendasCompleta(ld, lmpp, pvmp);
    setResultadoSimulacao(simulacao);
  };

  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content metas-page">
          <h1 className="page-title">Simulador de Metas de Lucro</h1>
          
          <section className="form-section simulador-metas">
            <h2 className="section-title">Defina sua Meta</h2>
            <form className="form-metas" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="lucroDesejado">Quanto você quer lucrar (R$)?*</label>
                <input type="number" id="lucroDesejado" value={lucroDesejado} onChange={(e) => setLucroDesejado(e.target.value)} placeholder="Ex: 2000.00" step="0.01"/>
                {erros.lucroDesejado && <p className="error-message">{erros.lucroDesejado}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="lucroMedioProduto">Lucro Médio por Produto/Venda (R$):*</label>
                <input type="number" id="lucroMedioProduto" value={lucroMedioPorProduto} onChange={(e) => setLucroMedioPorProduto(e.target.value)} placeholder="Ex: 50.00" step="0.01"/>
                {erros.lucroMedioPorProduto && <p className="error-message">{erros.lucroMedioPorProduto}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="precoVendaMedioPorProduto">Preço de Venda Médio por Produto (R$):*</label>
                <input type="number" id="precoVendaMedioPorProduto" value={precoVendaMedioPorProduto} onChange={(e) => setPrecoVendaMedioPorProduto(e.target.value)} placeholder="Ex: 120.00" step="0.01"/>
                {erros.precoVendaMedioPorProduto && <p className="error-message">{erros.precoVendaMedioPorProduto}</p>}
              </div>
              <button type="button" className="btn-submit btn-simular" onClick={handleSimularMeta}>Simular Meta</button>
            </form>
          </section>
          
          {resultadoSimulacao && resultadoSimulacao.quantidadeNecessaria > 0 && (
            <section className="resultado-section">
              <h2 className="section-title">Resultado da Simulação</h2>
              <div className="resultado-simulacao">
                <p>Para lucrar <strong>{formatarMoeda(parseFloat(lucroDesejado))}</strong>, com um lucro médio de <strong>{formatarMoeda(parseFloat(lucroMedioPorProduto))}</strong> por unidade e preço de venda médio de <strong>{formatarMoeda(parseFloat(precoVendaMedioPorProduto))}</strong>:</p>
                <p><strong>Você precisará vender aproximadamente:</strong> {resultadoSimulacao.quantidadeNecessaria} unidades/serviços.</p>
                <p><strong>Sua venda bruta estimada será de:</strong> {formatarMoeda(resultadoSimulacao.vendaBrutaEstimada)}.</p>
                <p><em>Este é um cálculo estimado.</em></p>
              </div>
            </section>
          )}
          {resultadoSimulacao && resultadoSimulacao.mensagem && (
             <section className="resultado-section">
                <h2 className="section-title">Aviso</h2>
                <p className="warning-message">{resultadoSimulacao.mensagem}</p>
            </section>
          )}

          <section className="sugestoes-metas">
             <h2 className="section-title">Sugestões de Metas (Exemplos)</h2>
             {sugestoes.length > 0 ? (
                <ul className="lista-sugestoes">
                    {sugestoes.map((sug, index) => (
                    <li key={index} onClick={() => {
                        setLucroDesejado(sug.valor.toString());
                        // Poderia pré-preencher outros campos se a sugestão fosse mais complexa
                    }}>
                        {sug.texto} (Clique para usar este valor de lucro)
                    </li>
                    ))}
                </ul>
             ) : <p>Não há sugestões no momento.</p>}
          </section>
        </main>
      </div>
    </div>
  );
}

export default MetasPage;
