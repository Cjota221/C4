// src/components/TabelaFinanceira.jsx
import React from 'react';
import '../styles/componentes.css';

function TabelaFinanceira({ colunas, dados }) {
  return (
    <div className="tabela-financeira-container">
      <table>
        <thead>
          <tr>
            {colunas && colunas.map((coluna, index) => (
              <th key={index}>{coluna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados && dados.map((linha, index) => (
            <tr key={index}>
              {colunas && colunas.map((coluna, i) => (
                <td key={i}>{linha[coluna]}</td>
              ))}
            </tr>
          ))}
          {(!dados || dados.length === 0) && (
            <tr>
              <td colSpan={colunas ? colunas.length : 1}>Nenhum dado disponível.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaFinanceira;
