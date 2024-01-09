"use strict";

import React from "react";
import Configurazione from "./Configurazione";
import Pista from "./Pista";
import Statistiche from "./Statistiche";

//definizione della classe App
class App extends React.Component {
  //costruttore
  constructor() {
    super();
    //stato iniziale
    this.state = {
      sessioneConfigurata: null,
      garaAvviata: false,
      posizioniMacchine: [],
      intervalloGara: null,
      durataGara: null,
      inizioGara: null,
    };
    //definizione dei metodi (binding)
    this.handleConfigSubmit = this.handleConfigSubmit.bind(this);
    this.avviaGara = this.avviaGara.bind(this);
  }

  //metodo per la gestione della configurazione
  handleConfigSubmit(numeroMacchine) {
    console.log("Numero di macchine:", numeroMacchine);
    //aggiorna lo stato
    this.setState({
      sessioneConfigurata: { numeroMacchine },
      //crea un array di lunghezza numeroMacchine e lo inizializza a 0
      posizioniMacchine: Array.from({ length: numeroMacchine }, () => 0),
    });
  }

  //metodo per l'avvio della gara
  avviaGara() {
    this.setState({ garaAvviata: true, inizioGara: Date.now() });
    this.setState({
      intervalloGara: setInterval(() => {
        // Usa this.setState per aggiornare lo stato in modo corretto
        this.setState((prevState) => ({
          posizioniMacchine: prevState.posizioniMacchine.map(
            (prevPosizione) => prevPosizione + Math.floor(Math.random() * 4)
          ),
        }));
      }, 4000),
    });
  }

  render() {
    return (
      <div>
        <Configurazione onSubmit={this.handleConfigSubmit} />
        <Pista
          numeroMacchine={this.state.sessioneConfigurata?.numeroMacchine}
          posizioniMacchine={this.state.posizioniMacchine}
        />
        <Statistiche
          garaAvviata={this.state.garaAvviata}
          durataGara={this.state.durataGara}
          avviaGara={this.avviaGara}
        />
      </div>
    );
  }
}

export default App;
