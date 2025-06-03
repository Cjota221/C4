// src/utils/calcularLucro.js
export const calcularLucroBruto = (precoVenda, custoProduto) => {
  // Lógica será implementada depois
  return precoVenda - custoProduto;
};

export const calcularMargemLucro = (lucroBruto, precoVenda) => {
  // Lógica será implementada depois
  if (precoVenda === 0) return 0;
  return (lucroBruto / precoVenda) * 100;
};

// Outras funções relacionadas a lucro podem ser adicionadas aqui
