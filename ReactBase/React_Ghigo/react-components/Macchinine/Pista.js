import React, { useState, useEffect } from "react";
import Cella from "./Cella";
import Macchina from "./Macchina";

function Pista({ posizioneMacchina, garaAvviata }) {
  const colonne = Array.from({ length: 11 }, (_, index) => index + 1);
  const [macchinaColore, setMacchinaColore] = useState(null);

  function generaColoreCasuale() {
    const colori = ["red", "yellow", "green", "blue"];
    const indiceColore = Math.floor(Math.random() * colori.length);
    const ret = colori[indiceColore];
    colori.splice(indiceColore, 1);
    return ret;
  }

  useEffect(() => {
    if (garaAvviata && !macchinaColore) {
      setMacchinaColore(generaColoreCasuale());
    }
  }, [garaAvviata, macchinaColore]);

  return (
    <div className="pista">
      <Cella
        contenuto={
          posizioneMacchina === 0 ? (
            <Macchina colore={macchinaColore} />
          ) : (
            "Partenza"
          )
        }
      />
      {colonne.slice(1, -1).map((colonna) => (
        <Cella
          key={colonna}
          contenuto={
            colonna === posizioneMacchina ? (
              <Macchina colore={macchinaColore} />
            ) : (
              `${colonna}`
            )
          }
        />
      ))}
      <Cella
        contenuto={
          colonne.length - 1 === posizioneMacchina ? (
            <Macchina colore={macchinaColore} />
          ) : (
            "Traguardo"
          )
        }
      />
    </div>
  );
}

export default Pista;
