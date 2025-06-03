import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { calcularLucroUnitario } from '../utils/calcularLucro';
import { calcularFreteUnitario } from '../utils/calcularFrete';
import { formatarMoeda } from '../utils/formatarMoeda';
import { numeroInvalido, numeroNaoNegativoInvalido, campoVazio } from '../utils/validarCampos';

function LucroCertoPage() {
  const [custoProduto, setCustoProduto] = useState('');
  const [custoFixoUnitario, setCustoFixoUnitario] = useState('');
  const [custoVariavelUnitario, setCustoVariavelUnitario] = useState('');
  const [freteTotal, setFreteTotal] = useState('');
  const [quantidadePecasFrete, setQuantidadePecasFrete] = useState('');
  const [margemLucroPercentual, setMargemLucroPercentual] = useState('');

  const [resultado, setResultado] = useState(null);
  const [erros, setErros] = useState({});

  const validarFormulario = () => {
    const novosErros = {};
    if (numeroNaoNegativoInvalido(custoProduto)) novosErros.custoProduto = "Custo do produto inválido.";
    if (numeroNaoNegativoInvalido(custoFixoUnitario)) novosErros.custoFixoUnitario = "Custo fixo unitário inválido.";
    if (numeroNaoNegativoInvalido(custoVariavelUnitario)) novosErros.custoVariavelUnitario = "Custo variável unitário inválido.";
    if (numeroNaoNegativoInvalido(freteTotal)) novosErros.freteTotal = "Frete total inválido.";
    if (numeroInvalido(quantidadePecasFrete) || Number(quantidadePecasFrete) <= 0) novosErros.quantidadePecasFrete = "Quantidade de peças inválida.";
    if (numeroNaoNegativoInvalido(margemLucroPercentual) || Number(margemLucroPercentual) >= 100) novosErros.margemLucroPercentual = "Margem de lucro deve ser entre 0 e 99.99.";
    
    // Campos obrigatórios
    if (campoVazio(custoProduto)) novosErros.custoProduto = "Custo do produto é obrigatório.";
    if (campoVazio(margemLucroPercentual)) novosErros.margemLucroPercentual = "Margem de lucro é obrigatória.";


    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleCalcularPrecoIdeal = () => {
    if (!validarFormulario()) {
      setResultado(null);
      return;
    }

    const cp = parseFloat(custoProduto) || 0;
    const cfu = parseFloat(custoFixoUnitario) || 0;
    const cvu = parseFloat(custoVariavelUnitario) || 0;
    const ft = parseFloat(freteTotal) || 0;
    const qp = parseInt(quantidadePecasFrete, 10) || 1; // Evitar divisão por zero se não preenchido
    const mlp = parseFloat(margemLucroPercentual) || 0;

    const freteUnit = (qp > 0 && ft > 0) ? calcularFreteUnitario(ft, qp) : 0;

    const calculo = calcularLucroUnitario({
      custoProduto: cp,
      custoFixoUnitario: cfu,
      custoVariavelUnitario: cvu,
      freteUnitario: freteUnit,
      margemLucroPercentual: mlp,
    });
    
    setResultado({ ...calculo, freteUnitarioCalculado: freteUnit });
  };

  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content lucro-certo-page">
          <h1 className="page-title">Lucro Certo: Calculadora de Preço Ideal</h1>
          
          <section className="form-section calculadora-preco">
            <h2 className="section-title">Insira os Custos e a Margem Desejada</h2>
            <form className="form-lucro-certo" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="custoProduto">Custo do Produto (R$):*</label>
                  <input type="number" id="custoProduto" value={custoProduto} onChange={(e) => setCustoProduto(e.target.value)} placeholder="Ex: 25.50" step="0.01" />
                  {erros.custoProduto && <p className="error-message">{erros.custoProduto}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="custoFixoUnitario">Custo Fixo Unitário (R$) (Opcional):</label>
                  <input type="number" id="custoFixoUnitario" value={custoFixoUnitario} onChange={(e) => setCustoFixoUnitario(e.target.value)} placeholder="Ex: 2.00" step="0.01" />
                  {erros.custoFixoUnitario && <p className="error-message">{erros.custoFixoUnitario}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="custoVariavelUnitario">Custo Variável Unitário (R$) (Opcional):</label>
                  <input type="number" id="custoVariavelUnitario" value={custoVariavelUnitario} onChange={(e) => setCustoVariavelUnitario(e.target.value)} placeholder="Ex: 1.50" step="0.01" />
                  {erros.custoVariavelUnitario && <p className="error-message">{erros.custoVariavelUnitario}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="freteTotal">Frete Total da Compra (R$) (Opcional):</label>
                  <input type="number" id="freteTotal" value={freteTotal} onChange={(e) => setFreteTotal(e.target.value)} placeholder="Ex: 50.00" step="0.01" />
                  {erros.freteTotal && <p className="error-message">{erros.freteTotal}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="quantidadePecasFrete">Quantidade de Peças no Frete (Opcional):</label>
                  <input type="number" id="quantidadePecasFrete" value={quantidadePecasFrete} onChange={(e) => setQuantidadePecasFrete(e.target.value)} placeholder="Ex: 10" min="1" step="1" />
                  {erros.quantidadePecasFrete && <p className="error-message">{erros.quantidadePecasFrete}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="margemLucro">Margem de Lucro Desejada (%):*</label>
                  <input type="number" id="margemLucro" value={margemLucroPercentual} onChange={(e) => setMargemLucroPercentual(e.target.value)} placeholder="Ex: 30 (para 30%)" step="0.01" />
                  {erros.margemLucroPercentual && <p className="error-message">{erros.margemLucroPercentual}</p>}
                </div>
              </div>
              <button type="button" className="btn-submit btn-calcular" onClick={handleCalcularPrecoIdeal}>Calcular Preço Ideal</button>
            </form>
          </section>
          
          {resultado && (
            <section className="resultado-section">
              <h2 className="section-title">Resultado do Cálculo</h2>
              <div className="resultado-calculo">
                <p><strong>Custo Unitário Total:</strong> {formatarMoeda(resultado.custoTotalUnitario)}</p>
                {resultado.freteUnitarioCalculado > 0 && <p><strong>Frete Unitário Considerado:</strong> {formatarMoeda(resultado.freteUnitarioCalculado)}</p>}
                <p className="destaque-preco"><strong>Preço de Venda Ideal:</strong> {formatarMoeda(resultado.precoIdeal)}</p>
                <p><strong>Lucro Bruto por Unidade:</strong> {formatarMoeda(resultado.lucroPorUnidade)}</p>
                <p><strong>Margem de Lucro Efetiva:</strong> {resultado.margemEfetiva.toFixed(2)}%</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default LucroCertoPage;
