// src/utils/metas.js
export const verificarProgressoMeta = (valorAtual, valorMeta) => {
  // Lógica será implementada depois
  if (valorMeta === 0) return 0;
  return (valorAtual / valorMeta) * 100;
};

export const definirNovaMeta = (tipoMeta, valor) => {
  // Lógica será implementada depois
  // Ex: { tipo: tipoMeta, valor: valor, dataInicio: new Date(), status: 'ativa' }
  return { tipoMeta, valor };
};

// Outras funções relacionadas a metas
