"use strict";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeri: Array(5).fill(0),
      estratti: Array(5).fill(0),
      giocata: 0,
      colori: [],
      vittoria: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(e) {
    let id = e.target.id;
    if (id === "genera") {
      this.reset();
    } else if (id === "invia") {
      this.setState({ giocata: 1 });
    } else if (id === "estrai") {
      this.setState({ vittoria: "" });
      let arr = [];
      let i = 0;
      while (i < 5) {
        let n = Math.floor(Math.random() * 10) + 1;
        if (!arr.includes(n)) {
          arr.push(n);
          i++;
        }
      }
      this.controlla(arr);
    }
  }

  controlla(estratti) {
    let numeri = this.state.numeri;
    let colori = this.state.colori;
    let count = 0;
    let messaggio = "";
    let colore = "";

    for (let i = 0; i < 5; i++) {
      colori.push(colore);
      if (numeri.includes(estratti[i])) {
        count++;
      }
    }

    if (count === 5) {
      messaggio = "Cinquina!";
      colore = "red";
    } else if (count === 4) {
      messaggio = "Quaterna!";
      colore = "blue";
    } else if (count === 3) {
      messaggio = "Terna!";
      colore = "green";
    } else if (count === 2) {
      messaggio = "Ambo!";
      colore = "yellow";
    } else {
      messaggio = "Niente! scemo!";
    }
    for (let i = 0; i < 5; i++) {
      if (numeri.includes(estratti[i])) {
        colori[i] = colore;
      }
    }

    this.setState({
      estratti: estratti,
      vittoria: messaggio,
      giocata: 2,
      colori: colori,
    });
  }

  onChange(e) {
    let id = e.target.id;
    let valore = parseInt(e.target.value);

    if (isNaN(valore)) {
      valore = "";
      alert("inserisci un numero");
    } else if (valore < 1 || valore > 10) {
      valore = "";
      alert("inserisci un numero da 1 a 10");
    } else {
      let arr = this.state.numeri;
      arr[id] = valore;
      this.setState({ numeri: arr });
    }
  }

  reset() {
    this.setState({
      numeri: Array(5).fill(0),
      estratti: Array(5).fill(0),
      giocata: 0,
      colori: [],
      vittoria: "",
    });
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <br />

        <Compilazione
          giocata={this.state.giocata}
          onClick={this.onClick}
          onChange={this.onChange}
        />

        <br />
        {this.state.giocata > 0 && (
          <Visualizzazione numeri={this.state.numeri} />
        )}
        <br />
        <Estrazione
          onClick={this.onClick}
          giocata={this.state.giocata}
          estratti={this.state.estratti}
          vittoria={this.state.vittoria}
          colori={this.state.colori}
        />
      </div>
    );
  }
}
