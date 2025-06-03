/**
 * @file Função utilitária para formatação de moeda.
 */

/**
 * Formata um valor numérico como moeda brasileira (BRL).
 * Exemplo: 1234.5 -> "R$ 1.234,50"
 *
 * @param {number} valor - O valor numérico a ser formatado.
 * @returns {string} O valor formatado como string no padrão monetário brasileiro.
 * Retorna "R$ 0,00" se o valor não for um número.
 */
export const formatarMoeda = (valor) => {
  if (typeof valor !== 'number' || isNaN(valor)) {
    // console.warn("formatarMoeda: valor fornecido não é um número. Retornando R$ 0,00.");
    valor = 0;
  }

  const valorFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);

  return valorFormatado;
};
