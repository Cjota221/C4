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

  if (margemDecimal < 1) { // Evita divisão por zero ou negativo se margem >= 100%
    precoIdeal = custoTotalUnitario / (1 - margemDecimal);
  } else {
    // Se a margem desejada for 100% ou mais, o preço ideal tende ao infinito
    // ou precisa de uma lógica de markup simples (Preço = Custo * (1 + Markup))
    // Por simplicidade, aqui vamos considerar um markup se a margem for >= 100%
    // Isso é uma interpretação, já que margem sobre o PREÇO não pode ser >= 100%
    // Se for markup sobre o CUSTO: Preço = Custo * (1 + Margem)
    // A fórmula PV = CTU / (1 - MargemDecimal) é para margem sobre o PREÇO DE VENDA.
    // Se a intenção é markup sobre o CUSTO:
    // precoIdeal = custoTotalUnitario * (1 + margemDecimal);
    // Mantendo a fórmula original e tratando o caso extremo:
    precoIdeal = custoTotalUnitario * (1 + margemDecimal); // Exemplo de markup sobre custo se margem >= 100%
    // Ou pode-se lançar um erro ou retornar um valor indicativo de problema.
    // Para este escopo, vamos assumir que margemLucroPercentual é sobre o preço de venda e < 100%.
    // Se margemLucroPercentual for, por exemplo, 100%, a fórmula original daria divisão por zero.
    // Se for 50%, PV = CTU / 0.5 (ou seja, o lucro é igual ao custo)
    // Se a margem for 100% ou mais, a fórmula PV = CTU / (1-MD) não se aplica bem.
    // Vamos recalcular precoIdeal para margens "normais" (<100%)
    if (margemDecimal < 1 && (1 - margemDecimal) !== 0) {
        precoIdeal = custoTotalUnitario / (1 - margemDecimal);
    } else if (margemDecimal >=1 ) { // Para margens >= 100%, usar markup sobre o custo.
        precoIdeal = custoTotalUnitario * (1 + margemDecimal);
    } else { // Caso 1 - margemDecimal seja 0 (margem de 100%)
        precoIdeal = custoTotalUnitario * 2; // Exemplo: Dobrar o custo se a margem for 100% do custo.
                                           // Mas a fórmula original implicaria preço infinito.
                                           // Vamos assumir que a margem é sobre o custo se for 100%
                                           // Se a margem desejada é 100% do preço de venda, é impossível.
                                           // Clarificando: margem de lucro é (Lucro/PreçoVenda).
                                           // Lucro = PreçoVenda - CustoTotalUnitario
                                           // Margem = (PreçoVenda - CustoTotalUnitario) / PreçoVenda
                                           // Margem * PreçoVenda = PreçoVenda - CustoTotalUnitario
                                           // CustoTotalUnitario = PreçoVenda - Margem * PreçoVenda
                                           // CustoTotalUnitario = PreçoVenda * (1 - Margem)
                                           // PreçoVenda = CustoTotalUnitario / (1 - Margem)
                                           // Esta fórmula é válida para Margem < 1 (ou 100%)
        if ((1-margemDecimal) <= 0) { // Se margem for 100% ou mais, não é possível pela fórmula tradicional.
                                  // Adotaremos markup sobre o custo como fallback prático.
            precoIdeal = custoTotalUnitario * (1 + margemDecimal);
        } else {
            precoIdeal = custoTotalUnitario / (1-margemDecimal);
        }
    }
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
