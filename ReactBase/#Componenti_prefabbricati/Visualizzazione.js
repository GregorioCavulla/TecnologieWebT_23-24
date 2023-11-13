 
// Visualizzazione.js
import React from 'react';

const Visualizzazione = ({ numeri, risultato }) => {
  const coloreSfondo = (risultato) => {
    switch (risultato) {
      case 'ambo':
        return 'yellow';
      case 'terno':
        return 'green';
      case 'quaterna':
        return 'blue';
      case 'cinquina':
        return 'red';
      default:
        return 'white';
    }
  };

  return (
    <div className="visualizzazione">
      <h2>Visualizzazione</h2>
      <div style={{ background: coloreSfondo(risultato) }}>
        {numeri.map((numero, index) => (
          <input key={index} type="text" value={numero} readOnly />
        ))}
      </div>
      <p>Risultato: {risultato}</p>
    </div>
  );
};

export default Visualizzazione;
