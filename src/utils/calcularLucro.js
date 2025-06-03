/**
 * @file Funções para cálculos de lucro e precificação.
 */

/**
 * Calcula o custo total unitário, preço ideal de venda, lucro por unidade e margem de lucro efetiva.
 *
 * @param {object} params - Parâmetros para o cálculo.
 * @param {number} params.custoProduto - Custo de aquisição do produto.
 * @param {number} params.custoFixoUnitario - Rateio do custo fixo por unidade de produto.
 * @param {number} params.custoVariavelUnitario - Custo variável por unidade (ex: embalagem, comissão).
 * @param {number} params.freteUnitario - Custo do frete por unidade de produto.
 * @param {number} params.margemLucroPercentual - Margem de lucro desejada em percentual (ex: 30 para 30%).
 * @returns {object} Um objeto contendo:
 * - custoTotalUnitario: O custo total para ter uma unidade do produto pronta para venda.
 * - precoIdeal: O preço de venda sugerido para atingir a margem de lucro desejada.
 * - lucroPorUnidade: O lucro bruto obtido por unidade vendida ao preço ideal.
 * - margemEfetiva: A margem de lucro percentual efetiva sobre o preço de venda.
 */
export const calcularLucroUnitario = ({
  custoProduto = 0,
  custoFixoUnitario = 0,
  custoVariavelUnitario = 0,
  freteUnitario = 0,
  margemLucroPercentual = 0,
}) => {
  // Validação básica dos inputs
  if (
    typeof custoProduto !== 'number' ||
    typeof custoFixoUnitario !== 'number' ||
    typeof custoVariavelUnitario !== 'number' ||
    typeof freteUnitario !== 'number' ||
    typeof margemLucroPercentual !== 'number'
  ) {
    console.error("Todos os parâmetros de calcularLucroUnitario devem ser números.");
    return {
      custoTotalUnitario: 0,
      precoIdeal: 0,
      lucroPorUnidade: 0,
      margemEfetiva: 0,
    };
  }

  const custoTotalUnitario =
    custoProduto + custoFixoUnitario + custoVariavelUnitario + freteUnitario;

  // O preço de venda (PV) é CustoTotalUnitario / (1 - MargemDesejadaDecimal)
  // Ex: Se quero 30% de margem (0.3), então PV = CTU / (1 - 0.3) = CTU / 0.7
  const margemDecimal = margemLucroPercentual / 100;
  let precoIdeal = 0;

  // Margens abaixo de 100% utilizam a fórmula tradicional.
  // Para margens iguais ou superiores a 100%, aplica-se um simples markup
  // sobre o custo total unitário para evitar divisões por zero ou valores
  // negativos na fórmula anterior.
  if (margemDecimal >= 1) {
    precoIdeal = custoTotalUnitario * (1 + margemDecimal);
  } else {
    precoIdeal = custoTotalUnitario / (1 - margemDecimal);
  }


  const lucroPorUnidade = precoIdeal - custoTotalUnitario;
  const margemEfetiva = precoIdeal > 0 ? (lucroPorUnidade / precoIdeal) * 100 : 0;

  return {
    custoTotalUnitario: parseFloat(custoTotalUnitario.toFixed(2)),
    precoIdeal: parseFloat(precoIdeal.toFixed(2)),
    lucroPorUnidade: parseFloat(lucroPorUnidade.toFixed(2)),
    margemEfetiva: parseFloat(margemEfetiva.toFixed(2)),
  };
};
