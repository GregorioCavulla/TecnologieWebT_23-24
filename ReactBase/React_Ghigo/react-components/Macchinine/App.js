// App.js
import React, { useState, useEffect } from "react";
import Configurazione from "./Configurazione";
import Pista from "./Pista";
import Statistiche from "./Statistiche";

function App() {
  const [sessioneConfigurata, setSessioneConfigurata] = useState(null);
  const [garaAvviata, setGaraAvviata] = useState(false);
  const [posizioniMacchine, setPosizioniMacchine] = useState([]);
  const [intervalloGara, setIntervalloGara] = useState(null);
  const [durataGara, setDurataGara] = useState(null);
  const [inizioGara, setInizioGara] = useState(null);

  function handleConfigSubmit(numeroMacchine) {
    console.log("Numero di macchine:", numeroMacchine);
    setSessioneConfigurata({
      numeroMacchine,
    });
    setPosizioniMacchine(Array.from({ length: numeroMacchine }, () => 0));
  }

  function avviaGara() {
    setGaraAvviata(true);
    setInizioGara(Date.now());

    const intervallo = setInterval(() => {
      setPosizioniMacchine((prevPosizioni) =>
        prevPosizioni.map(
          (prevPosizione) => prevPosizione + Math.floor(Math.random() * 4)
        )
      );
    }, 4000);

    setIntervalloGara(intervallo);
  }

  useEffect(() => {
    if (!garaAvviata) {
      clearInterval(intervalloGara);

      // Calcola la durata della gara al termine
      const durata = Math.floor((Date.now() - inizioGara) / 1000);
      setDurataGara(durata);
    }
  }, [garaAvviata, intervalloGara, inizioGara]);

  useEffect(() => {
    if (garaAvviata && posizioniMacchine.some((posizione) => posizione >= 10)) {
      clearInterval(intervalloGara);
      const vincitori = posizioniMacchine
        .map((posizione, index) => ({ posizione, indice: index }))
        .filter((macchina) => macchina.posizione >= 10)
        .map((vincitore) => `Macchina ${vincitore.indice + 1}`);

      alert(`Gara finita! Vincitori: ${vincitori.join(", ")}`);
    }
  }, [garaAvviata, posizioniMacchine, intervalloGara]);

  return (
    <div>
      <h1>Gara automobilistica</h1>
      <Configurazione onConfigSubmit={handleConfigSubmit} />
      {sessioneConfigurata && (
        <div>
          {posizioniMacchine.map((posizione, index) => (
            <Pista
              key={index}
              posizioneMacchina={posizione}
              garaAvviata={garaAvviata}
            />
          ))}
          <button onClick={avviaGara}>START!</button>
        </div>
      )}
      {garaAvviata && (
        <Statistiche
          garaAvviata={garaAvviata}
          posizioniMacchine={posizioniMacchine}
          durataGara={durataGara}
        />
      )}
    </div>
  );
}

export default App;
