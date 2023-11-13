// Compilazione.js
import React, { useState } from 'react';

const Compilazione = ({ onCompila }) => {
  const [numeri, setNumeri] = useState(['', '', '', '', '']);

  const handleNumeroChange = (index, value) => {
    const newNumeri = [...numeri];
    newNumeri[index] = value;
    setNumeri(newNumeri);
  };

  const generaSchedinaVuota = () => {
    setNumeri(['', '', '', '', '']);
  };

  const compilaSchedina = () => {
    const schedinaValida = numeri.every((numero) => parseInt(numero) >= 1 && parseInt(numero) <= 10);
    if (schedinaValida) {
      onCompila(numeri);
    } else {
      alert('Inserisci numeri validi da 1 a 10 in ogni casella.');
    }
  };

  return (
    <div className="compilazione">
      <h2>Compilazione</h2>
      {numeri.map((numero, index) => (
        <input
          key={index}
          type="number"
          value={numero}
          min="1"
          max="10"
          onChange={(e) => handleNumeroChange(index, e.target.value)}
        />
      ))}
      <button onClick={generaSchedinaVuota}>Genera Schedina Vuota</button>
      <button onClick={compilaSchedina}>Compila Schedina</button>
    </div>
  );
};

export default Compilazione;
