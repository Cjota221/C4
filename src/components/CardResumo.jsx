// src/components/CardResumo.jsx
import React from 'react';
import '../styles/componentes.css';

function CardResumo({ titulo, valor }) {
  return (
    <div className="card-resumo">
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
}

export default CardResumo;
