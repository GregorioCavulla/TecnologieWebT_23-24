"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      lanciPermessi: 0,
      lanciFatti: 0,
      punteggi: [],
      cellePrese: [],
      punteggio: 0,
      punteggioLancio: 0,
      punteggioMedio: 0,
      finita: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("onChange");
    let id = e.target.id;
    let value = e.target.value;
    if (id == "y") {
      console.log("y" + value);
      this.setState({ y: value });
    } else if (id == "x") {
      console.log("x" + value);
      this.setState({ x: value });
    } else if (id == "lanciPermessi") {
      console.log("lanciPermessi" + value);
      this.setState({ lanciPermessi: value });
    }
    this.punteggiCelle();
  }

  punteggiCelle() {
    console.log("punteggiCelle");
    let punteggi = this.state.punteggi;
    let x = this.state.x;
    let y = this.state.y;

    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        punteggi[i * 100 + j] = Math.floor(Math.random() * 5);
      }
    }

    this.setState({ punteggi: punteggi });
  }

  reset() {
    console.log("reset");
    this.setState({ x: 0 });
    this.setState({ y: 0 });
    this.setState({ lanciPermessi: 0 });
    this.setState({ lanciFatti: 0 });
    this.setState({ punteggi: [] });
    this.setState({ cellePrese: [] });
    this.setState({ punteggio: 0 });
    this.setState({ punteggioLancio: 0 });
    this.setState({ punteggioMedio: 0 });
    this.setState({ finita: false });
  }

  onClick(e) {
    this.setState({ punteggioLancio: 0 });

    console.log("onClick");
    let id = e.target.id; //coordinate della cella cliccata
    if (id == "reset") {
      this.reset();
      return;
    }
    let cellePrese = this.state.cellePrese;

    if (cellePrese.includes(id)) {
      return;
    }

    let lanciPermessi = this.state.lanciPermessi;

    console.log("lanciPermessi" + lanciPermessi);

    if (lanciPermessi == 0) {
      alert("Inserisci il numero di lanci");
      this.setState({ finita: true });
      return;
    }

    let lanciFatti = this.state.lanciFatti;

    if (lanciFatti >= lanciPermessi) {
      alert("Hai finito i lanci");
      return;
    }

    lanciFatti++;

    this.setState({ lanciFatti: lanciFatti });
    let punteggioLancio = this.state.punteggioLancio;
    let xCella = id % 100;
    let yCella = Math.floor(id / 100);
    if (cellePrese.includes(id)) {
      return;
    }
    for (let i = 0; i < this.state.y; i++) {
      for (let j = 0; j < this.state.x; j++) {
        if (
          i >= yCella - 1 &&
          i <= yCella + 1 &&
          j >= xCella - 1 &&
          j <= xCella + 1
        ) {
          if (!cellePrese.includes(i * 100 + j)) {
            cellePrese.push(i * 100 + j);
            punteggioLancio =
              punteggioLancio + this.state.punteggi[i * 100 + j];
          }

          console.log(cellePrese);
          this.setState({ cellePrese: cellePrese });
          this.setState({ punteggioLancio: punteggioLancio });
          this.popolaCellePrese();
        }
      }
    }
    this.calcolaPunteggio();
  }

  popolaCellePrese() {
    console.log("popolaCellePrese");
    let cellePrese = this.state.cellePrese;
    let punteggi = this.state.punteggi;

    for (let i = 0; i < cellePrese.length; i++) {
      let cella = document.getElementById(cellePrese[i]);
      cella.style.backgroundColor = "blue";
      cella.innerHTML = punteggi[cellePrese[i]];
    }
  }

  calcolaPunteggio() {
    console.log("calcolaPunteggio");
    let punteggio = this.state.punteggio;
    let punteggioMedio = this.state.punteggioMedio;
    let punteggi = this.state.punteggi;
    let cellePrese = this.state.cellePrese;
    let lanciFatti = this.state.lanciFatti;
    for (let i = 0; i < cellePrese.length; i++) {
      punteggio = punteggio + punteggi[cellePrese[i]];
    }

    punteggioMedio = punteggio / lanciFatti;

    this.setState({ punteggio: punteggio });
    this.setState({ punteggioMedio: punteggioMedio });
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <Configurazione onChange={this.onChange} />
        <Lago x={this.state.x} y={this.state.y} onClick={this.onClick} />
        <Punteggio
          finita={this.state.finita}
          punteggioLancio={this.state.punteggioLancio}
          punteggio={this.state.punteggio}
          punteggioMedio={this.state.punteggioMedio}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
