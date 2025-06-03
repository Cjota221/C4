/**
 * @file Funções para simulação e sugestão de metas de vendas.
 */

/**
 * Simula a quantidade de produtos a serem vendidos para alcançar um lucro desejado,
 * com base no lucro médio por produto.
 *
 * @param {number} lucroDesejado - O montante de lucro que se deseja alcançar.
 * @param {number} lucroMedioPorProduto - O lucro médio obtido com a venda de uma unidade do produto.
 * @returns {object} Um objeto contendo:
 * - quantidadeNecessaria: Número de unidades que precisam ser vendidas.
 * - vendaBrutaEstimada: Não é possível calcular sem o preço médio do produto.
 * Retornará 0 ou precisaria de mais um parâmetro (precoMedioPorProduto).
 * Para este escopo, focaremos na quantidade necessária.
 * Se quisermos a venda bruta: quantidadeNecessaria * precoMedioPorProduto.
 */
export const simularMetaVendas = (lucroDesejado = 0, lucroMedioPorProduto = 0) => {
  if (typeof lucroDesejado !== 'number' || typeof lucroMedioPorProduto !== 'number') {
    console.error("lucroDesejado e lucroMedioPorProduto devem ser números.");
    return { quantidadeNecessaria: 0, vendaBrutaEstimada: 0 };
  }

  if (lucroMedioPorProduto <= 0) {
    // Não é possível alcançar lucro se o produto não gera lucro ou dá prejuízo.
    return {
      quantidadeNecessaria: Infinity, // Ou um valor alto/indicador de impossibilidade
      vendaBrutaEstimada: 0,
      mensagem: "Não é possível atingir a meta com lucro médio por produto zero ou negativo."
    };
  }

  const quantidadeNecessaria = Math.ceil(lucroDesejado / lucroMedioPorProduto);

  // Para calcular a vendaBrutaEstimada, precisaríamos do preço de venda médio do produto.
  // const vendaBrutaEstimada = quantidadeNecessaria * precoMedioPorProduto;
  // Como não temos precoMedioPorProduto, vamos focar na quantidade.
  // Para simplificar, podemos omitir vendaBrutaEstimada ou pedir `precoMedioPorProduto` como parâmetro.
  // Adicionando `precoMedioPorProduto` para completar a função conforme o retorno esperado.

  return {
    quantidadeNecessaria: quantidadeNecessaria,
    // vendaBrutaEstimada: será calculada no componente se necessário,
    // ou a função pode ser estendida para receber `precoVendaMedioPorProduto`
  };
};


/**
 * Simula a quantidade de produtos a serem vendidos e a venda bruta estimada
 * para alcançar um lucro desejado.
 *
 * @param {number} lucroDesejado - O montante de lucro que se deseja alcançar.
 * @param {number} lucroMedioPorProduto - O lucro médio obtido com a venda de uma unidade do produto.
 * @param {number} precoVendaMedioPorProduto - O preço de venda médio de uma unidade do produto.
 * @returns {object} Um objeto contendo:
 * - quantidadeNecessaria: Número de unidades que precisam ser vendidas.
 * - vendaBrutaEstimada: A receita bruta estimada ao vender a quantidade necessária.
 * - mensagem: (Opcional) Mensagem em caso de impossibilidade.
 */
export const simularMetaVendasCompleta = (
    lucroDesejado = 0,
    lucroMedioPorProduto = 0,
    precoVendaMedioPorProduto = 0
) => {
    if (
        typeof lucroDesejado !== 'number' ||
        typeof lucroMedioPorProduto !== 'number' ||
        typeof precoVendaMedioPorProduto !== 'number'
    ) {
        console.error("Todos os parâmetros de simularMetaVendasCompleta devem ser números.");
        return { quantidadeNecessaria: 0, vendaBrutaEstimada: 0 };
    }

    if (lucroMedioPorProduto <= 0) {
        return {
            quantidadeNecessaria: 0, // Ou Infinity
            vendaBrutaEstimada: 0,
            mensagem: "Lucro médio por produto deve ser positivo para calcular a meta."
        };
    }
    if (precoVendaMedioPorProduto < 0) { // Preço não pode ser negativo
         return {
            quantidadeNecessaria: 0,
            vendaBrutaEstimada: 0,
            mensagem: "Preço de venda médio por produto não pode ser negativo."
        };
    }


    const quantidadeNecessaria = Math.ceil(lucroDesejado / lucroMedioPorProduto);
    const vendaBrutaEstimada = quantidadeNecessaria * precoVendaMedioPorProduto;

    return {
        quantidadeNecessaria: quantidadeNecessaria,
        vendaBrutaEstimada: parseFloat(vendaBrutaEstimada.toFixed(2)),
    };
};


/**
 * Gera sugestões de metas de lucro com base em uma lista de lucros médios de produtos.
 * Esta é uma função de exemplo e pode ser expandida.
 *
 * @param {Array<number>} lucrosMedios - Uma lista de lucros médios de diferentes produtos.
 * @returns {Array<object>} Uma lista de sugestões de metas.
 * Cada sugestão pode ter um valor de lucro e um racional.
 */
export const gerarSugestoesDeMeta = (lucrosMedios = []) => {
  if (!Array.isArray(lucrosMedios) || !lucrosMedios.every(lm => typeof lm === 'number' && lm > 0)) {
    // console.error("lucrosMedios deve ser um array de números positivos.");
    return []; // Retorna vazio se não houver lucros válidos para basear sugestões
  }

  const sugestoes = [];
  const metasBase = [100, 500, 1000, 2000, 5000]; // Valores base para metas de lucro

  // Exemplo: Sugerir metas que são múltiplos do lucro médio de um produto popular
  // ou metas fixas divididas pelo lucro médio para dar ideia de esforço.
  const lucroMedioConsiderado = lucrosMedios.length > 0 ?
                               Math.max(...lucrosMedios.filter(lm => lm > 0)) : // Pega o maior lucro médio positivo
                               0;

  if (lucroMedioConsiderado > 0) {
    metasBase.forEach(meta => {
      sugestoes.push({
        lucroDesejado: meta,
        descricao: `Alcançar R$ ${meta.toFixed(2)} de lucro.`,
        // Poderia adicionar: unidadesNecessarias: Math.ceil(meta / lucroMedioConsiderado)
      });
    });
  } else {
      // Sugestões genéricas se não houver lucros médios
      sugestoes.push({ lucroDesejado: 500, descricao: "Defina sua primeira meta de lucro (ex: R$ 500,00)"});
      sugestoes.push({ lucroDesejado: 1000, descricao: "Busque um lucro de R$ 1000,00 este mês"});
  }


  // Lógica mais simples: Apenas retornar os valores base como sugestões.
  // A ideia de `lucrosMedios` seria para personalizar mais,
  // ex: "Venda X unidades do produto Y para lucrar R$ Z"
  // Por ora, vamos manter simples, retornando valores fixos de sugestão de lucro.

  const sugestoesFinais = [
    { valor: 500, texto: "Meta inicial: R$ 500,00 de lucro" },
    { valor: 1000, texto: "Meta intermediária: R$ 1.000,00 de lucro" },
    { valor: 2500, texto: "Meta avançada: R$ 2.500,00 de lucro" },
  ];


  // A função original `gerarSugestoesDeMeta([lucrosMedios])` implica que os lucros médios
  // seriam usados para gerar as sugestões. A implementação acima faz isso de forma rudimentar.
  // Se a ideia é apenas uma lista de valores de metas, a entrada [lucrosMedios] não seria necessária.
  // Vou ajustar para retornar apenas sugestões de valores de lucro.

  if (lucrosMedios && lucrosMedios.length > 0) {
      const avgLucroSignificativo = lucrosMedios.filter(l => l > 1).reduce((a,b) => a+b, 0) / lucrosMedios.filter(l => l > 1).length || 20; // Um lucro médio arbitrário se nenhum for bom

      return [
          { valor: parseFloat((avgLucroSignificativo * 10).toFixed(0)), texto: `Lucrar com 10 vendas (aprox. R$ ${parseFloat((avgLucroSignificativo * 10).toFixed(0))})` },
          { valor: parseFloat((avgLucroSignificativo * 25).toFixed(0)), texto: `Lucrar com 25 vendas (aprox. R$ ${parseFloat((avgLucroSignificativo * 25).toFixed(0))})` },
          { valor: parseFloat((avgLucroSignificativo * 50).toFixed(0)), texto: `Lucrar com 50 vendas (aprox. R$ ${parseFloat((avgLucroSignificativo * 50).toFixed(0))})` },
          { valor: 1000, texto: "Alcançar R$ 1.000,00 de lucro" },
          { valor: 2000, texto: "Alcançar R$ 2.000,00 de lucro" },
      ].sort((a,b) => a.valor - b.valor).filter((obj, index, self) => index === self.findIndex(o => o.valor === obj.valor)); // Ordena e remove duplicados
  }

  return sugestoesFinais; // Fallback
};
