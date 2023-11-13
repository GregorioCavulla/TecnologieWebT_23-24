// Estrazione.js
import React, { useState } from 'react';

const Estrazione = ({ onEstrai }) => {
  const [numeriEstratti, setNumeriEstratti] = useState(['', '', '', '', '']);

  const estraiNumeri = () => {
    // Logica per estrarre 5 numeri ammissibili diversi
    const numeriEstratti = [...Array(5)].map(() => Math.floor(Math.random() * 10) + 1);
    setNumeriEstratti(numeriEstratti);
    onEstrai(numeriEstratti);
  };

  return (
    <div className="estrazione">
      <h2>Estrazione</h2>
      <button onClick={estraiNumeri}>Estrai Numeri</button>
      {numeriEstratti.map((numero, index) => (
        <input key={index} type="text" value={numero} readOnly />
      ))}
    </div>
  );
};

export default Estrazione;
