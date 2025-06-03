import { useState, useEffect } from 'react';

/**
 * Hook customizado do React para salvar e recuperar dados no LocalStorage do navegador.
 * Sincroniza o estado do componente com o LocalStorage.
 *
 * @param {string} key - A chave sob a qual o valor será armazenado no LocalStorage.
 * @param {*} valorInicial - O valor inicial a ser usado se nada for encontrado no LocalStorage
 * ou se o LocalStorage não estiver disponível. Pode ser uma função
 * para computar o valor inicial de forma lazy.
 * @returns {[*, Function]} Um array contendo o valor atual e uma função para atualizá-lo.
 * Similar ao retorno de `useState`.
 */
export const useLocalStorage = (key, valorInicial) => {
  // Função para obter o valor do LocalStorage ou retornar o valor inicial
  const obterValorArmazenado = () => {
    // Verifica se o código está rodando no navegador (onde localStorage está disponível)
    if (typeof window === 'undefined') {
      return typeof valorInicial === 'function' ? valorInicial() : valorInicial;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : (typeof valorInicial === 'function' ? valorInicial() : valorInicial);
    } catch (error) {
      // Se houver um erro ao parsear (ex: dado corrompido), retorna o valor inicial
      console.warn(`Erro ao ler a chave "${key}" do localStorage:`, error);
      return typeof valorInicial === 'function' ? valorInicial() : valorInicial;
    }
  };

  // useState para armazenar nosso valor
  // Passa a função obterValorArmazenado para que a lógica só rode na primeira renderização
  const [valorArmazenado, setValorArmazenado] = useState(obterValorArmazenado);

  // useEffect para atualizar o LocalStorage quando valorArmazenado mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (typeof valorArmazenado === 'undefined') {
            // Se o valor for undefined, talvez seja melhor remover a chave
            // ou armazenar um null stringificado, dependendo do comportamento desejado.
            // window.localStorage.removeItem(key);
            window.localStorage.setItem(key, JSON.stringify(null)); // Ou remover
        } else {
            window.localStorage.setItem(key, JSON.stringify(valorArmazenado));
        }
      } catch (error) {
        console.warn(`Erro ao salvar a chave "${key}" no localStorage:`, error);
      }
    }
  }, [key, valorArmazenado]);


  const definirValor = (valor) => {
    try {
      // Permite que `valor` seja uma função, assim como no `useState`
      const valorASalvar = valor instanceof Function ? valor(valorArmazenado) : valor;
      setValorArmazenado(valorASalvar);
    } catch (error) {
      console.warn(`Erro ao definir valor para a chave "${key}":`, error);
    }
  };


  return [valorArmazenado, definirValor];
};
