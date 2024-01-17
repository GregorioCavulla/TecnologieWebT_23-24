"use strict";

class Gioco extends React.Component {
  constructor() {
    super();
    this.state = {
      giocatore: [].fill(0, 0, 13),
      banco: [].fill(0, 0, 13),
      punteggioGiocatore: 0,
      punteggioBanco: 0,
      puntata: 0,
      credito: 0,
      g: true,
      b: false,
      idTimer: 0,
      iniziata: false,
    };
    this.estraiCarta = this.estraiCarta.bind(this);
    this.puntata = this.puntata.bind(this);
  }

  giocaBanco() {
    let banco = this.state.banco;
    let idTimer = this.state.idTimer;
    let punteggioGiocatore = this.state.punteggioGiocatore;

    let punteggio = 0;

    for (let i = 0; i < banco.length; i++) {
      if (banco[i] === "figura") {
        punteggio += 0.5;
      } else {
        punteggio += banco[i];
      }
    }
    this.setState({ punteggioBanco: punteggio });
    if (punteggio < 6) {
      this.estraiCarta("banco");
    } else {
      clearInterval(idTimer);
      this.finisciMano(punteggio, punteggioGiocatore);
    }
  }

  puntata(e) {
    this.setState({ puntata: e.target.value });
  }

  estraiCarta(e) {
    if (this.state.puntata === 0) {
      alert("Inserisci una puntata, coglione!");
      return;
    }
    console.log("s puntata: " + this.state.puntata);
    let giocatore = this.state.giocatore;
    let banco = this.state.banco;
    let punteggioGiocatore = this.state.punteggioGiocatore;
    let punteggioBanco = this.state.punteggioBanco;

    let mazzo = [1, 2, 4, 5, 6, 7, 8, 8, 8];

    let random = Math.floor(Math.random() * mazzo.length);
    let carta = mazzo[random];

    if (carta === 8) {
      carta = "figura";
    }
    mazzo.splice(random, 1);

    if (e === "banco") {
      banco.push(carta);
    } else if (e.target.id === "giocatore") {
      this.setState({ iniziata: true });
      giocatore.push(carta);
      this.setState({ giocatore: giocatore });

      if (carta === "figura") {
        punteggioGiocatore += 0.5;

        console.log("punteggioGiocatore: " + punteggioGiocatore);
        this.setState({ punteggioGiocatore: punteggioGiocatore });
        this.controllaSballato(punteggioGiocatore);
      } else {
        punteggioGiocatore += carta;

        console.log("punteggioGiocatore: " + punteggioGiocatore);
        this.setState({ punteggioGiocatore: punteggioGiocatore });
        this.controllaSballato(punteggioGiocatore);
      }
    } else if (e.target.id === "stop") {
      let idTimer = this.state.idTimer;
      idTimer = setInterval(() => this.giocaBanco(), 3000);
      this.setState({ idTimer: idTimer });
    }
  }

  controllaSballato(punteggio) {
    let punteggioBanco = this.state.punteggioBanco;
    console.log("punteggioGiocatore: " + punteggio);
    if (punteggio > 7.5) {
      this.tuamamma(punteggio);
      alert("Hai sballato!");
      this.finisciMano(punteggio, punteggioBanco);
    }
  }

  tuamamma(troia) {
    this.setState({ punteggioGiocatore: troia });
  }

  finisciMano(pg, pb) {
    let puntata = this.state.puntata;

    let cr = this.props.iniziale;
    this.setState({ credito: cr });
    console.log("credito iniziale: " + this.state.credito);

    if (pg > 7.5) {
      alert("Ha vinto il banco!");
      this.setState({ credito: this.state.credito - puntata });
    } else if (pg > pb) {
      alert("Hai vinto!");
      this.setState({ credito: this.state.credito + puntata });
    } else if (pg < pb) {
      alert("Ha vinto il banco!");
      this.setState({ credito: this.state.credito - puntata });
    }

    console.log("credito residuo: " + this.state.credito);

    this.props.finale = this.state.finale;
  }

  render() {
    return (
      <div className="Tavolo">
        <h1>Gioco</h1>
        <Tavolo carte={this.state.banco} giocatore={this.state.b} />
        <br />
        <Tavolo
          iniziata={this.state.iniziata}
          onChange={this.puntata}
          onClick={this.estraiCarta}
          carte={this.state.giocatore}
          giocatore={this.state.g}
        />
      </div>
    );
  }
}
