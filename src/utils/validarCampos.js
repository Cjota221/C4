/**
 * @file Funções para validação de campos de formulário.
 */

/**
 * Verifica se um valor (convertido para string) está vazio ou contém apenas espaços.
 *
 * @param {*} valor - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor for vazio ou apenas espaços, false caso contrário.
 */
export const campoVazio = (valor) => {
  if (valor === null || typeof valor === 'undefined') {
    return true;
  }
  return String(valor).trim() === '';
};

/**
 * Verifica se um valor pode ser interpretado como um número inválido (NaN)
 * ou se não é um número finito.
 * Útil para campos numéricos. Considera string vazia como inválida para número.
 *
 * @param {*} valor - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor for considerado um número inválido,
 * ou seja, se não puder ser convertido para um número finito.
 * Retorna false se for um número finito válido.
 */
export const numeroInvalido = (valor) => {
  if (campoVazio(valor)) { // String vazia não é um número válido neste contexto
    return true;
  }
  const num = Number(valor);
  return isNaN(num) || !isFinite(num);
};


/**
 * Valida se um valor é um número positivo (maior que zero).
 * @param {*} valor O valor a ser validado.
 * @returns {boolean} True se for um número positivo, false caso contrário.
 */
export const numeroPositivoInvalido = (valor) => {
    if (numeroInvalido(valor)) {
        return true; // Já é inválido como número
    }
    return Number(valor) <= 0;
}

/**
 * Valida se um valor é um número não negativo (maior ou igual a zero).
 * @param {*} valor O valor a ser validado.
 * @returns {boolean} True se for um número não negativo, false caso contrário.
 */
export const numeroNaoNegativoInvalido = (valor) => {
    if (numeroInvalido(valor)) {
        return true; // Já é inválido como número
    }
    return Number(valor) < 0;
}

/**
 * Valida se um e-mail possui um formato básico válido.
 * Não garante a existência do e-mail, apenas o formato.
 * @param {string} email O e-mail a ser validado.
 * @returns {boolean} True se o formato for inválido, false caso contrário.
 */
export const emailInvalido = (email) => {
    if (campoVazio(email)) {
        return true;
    }
    // Expressão regular simples para validação de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !regexEmail.test(String(email).toLowerCase());
};
