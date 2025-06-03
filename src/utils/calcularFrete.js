/**
 * @file Função para cálculo de frete unitário.
 */

/**
 * Divide o valor total do frete pela quantidade de peças compradas,
 * gerando o custo de frete unitário.
 *
 * @param {number} freteTotal - O valor total pago pelo frete.
 * @param {number} quantidadeDePecas - A quantidade de peças que vieram nesse frete.
 * @returns {number} O custo do frete por unidade de peça. Retorna 0 se a quantidade for 0 ou inválida.
 */
export const calcularFreteUnitario = (freteTotal = 0, quantidadeDePecas = 0) => {
  if (typeof freteTotal !== 'number' || typeof quantidadeDePecas !== 'number') {
    console.error("freteTotal e quantidadeDePecas devem ser números.");
    return 0;
  }

  if (quantidadeDePecas <= 0) {
    // Não é possível dividir por zero ou uma quantidade negativa/nula de peças.
    // Pode-se também lançar um erro ou retornar NaN, dependendo da política de erro.
    return 0;
  }

  const freteUnitario = freteTotal / quantidadeDePecas;
  return parseFloat(freteUnitario.toFixed(2));
};
