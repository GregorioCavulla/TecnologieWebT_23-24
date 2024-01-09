import React, { useState } from "react";

function Configurazione({ onConfigSubmit }) {
  const [numeroMacchine, setNumeroMacchine] = useState(2);

  function handleNumeroMacchineChange(e) {
    const value = parseInt(e.target.value, 10);
    setNumeroMacchine(value);
  }

  function handleSubmit() {
    if (numeroMacchine >= 2 && numeroMacchine <= 4) {
      onConfigSubmit(numeroMacchine);
    } else {
      alert("il numero di macchine deve essere compreso tra 2 e 4");
    }
  }

  return (
    <div>
      <label>
        Numero di macchine:
        <input
          type="number"
          min={2}
          max={4}
          value={numeroMacchine}
          onChange={handleNumeroMacchineChange}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Configurazione;
