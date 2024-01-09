import React, { useState, useEffect } from "react";

function Statistiche({ garaAvviata, posizioniMacchine, durataGara }) {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => {
    if (garaAvviata) {
      const classificaAttuale = posizioniMacchine
        .map((posizione, index) => ({ macchina: index + 1, posizione }))
        .sort((a, b) => a.posizione - b.posizione);

      setClassifica(classificaAttuale);
    }
  }, [garaAvviata, posizioniMacchine]);

  return (
    <div>
      <h2>Classifica Provvisoria</h2>
      <ul>
        {classifica.map((item) => (
          <li key={item.macchina}>
            Macchina{item.macchina}: Posizione {item.posizione}
          </li>
        ))}
      </ul>

      {durataGara && (
        <div>
          <h2>Velocità media delle macchine</h2>
          {posizioniMacchine.map((posizione, index) => (
            <p key={index}>
              Macchina{index + 1}:{posizione / durataGara} celle al secondo
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Statistiche;
