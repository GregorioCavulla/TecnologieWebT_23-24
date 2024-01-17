"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tesoroX: -1,
      tesoroY: -1,
      x: 0,
      y: 0,
      punteggio: 0,
      count: 0,
      finita: false,
      iniziata: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  reset() {
    this.setState({
      tesoroX: -1,
      tesoroY: -1,
      x: 0,
      y: 0,
      punteggio: 0,
      count: 0,
      finita: false,
      iniziata: false,
    });
  }

  onClick(e) {
    this.setState({ iniziata: true });
    let id = e.target.id;
    if (id === "reset") {
      this.reset();
    }
    if (this.state.finita) {
      return;
    }
    let punteggio = this.state.punteggio;
    let value = e.target.value;
    let count = this.state.count;
    count++;
    this.setState({ count: count });
    if (id === "tesoro") {
      console.log("trovato");
      e.target.style.backgroundColor = "blue";
      this.setState({ finita: true });
      if (count < 11) {
        punteggio = 5;
      } else {
        punteggio = 2;
      }
      e.target.innerHTML = value;
      this.setState({ punteggio: punteggio });
    } else {
      console.log("non trovato");
      e.target.style.backgroundColor = "yellow";
      e.target.innerHTML = this.calcolaFreccia(id);
    }
  }
  //↖ ↑ ↗ ← · → ↙ ↓ ↘
  calcolaFreccia(idCella) {
    let tesoroX = this.state.tesoroX;
    let tesoroY = this.state.tesoroY;
    let x = idCella % 100;
    let y = Math.floor(idCella / 100);
    let freccia = "";
    if (tesoroX > x) {
      freccia += "→";
    } else if (tesoroX < x) {
      freccia += "←";
    }
    if (tesoroY > y) {
      freccia += "↓";
    } else if (tesoroY < y) {
      freccia += "↑";
    }
    if (freccia === "→↓" || freccia === "↓→") {
      freccia = "↘";
    }
    if (freccia === "→↑" || freccia === "↑→") {
      freccia = "↗";
    }
    if (freccia === "←↓" || freccia === "↓←") {
      freccia = "↙";
    }
    if (freccia === "←↑" || freccia === "↑←") {
      freccia = "↖";
    }
    return freccia;
  }

  onChange(e) {
    let id = e.target.id;
    if (id === "x") {
      this.setState({ x: e.target.value });
      let tesoroX = this.state.tesoroX;
      tesoroX = Math.floor(Math.random() * e.target.value);
      this.setState({ tesoroX: tesoroX });
    } else if (id === "y") {
      this.setState({ y: e.target.value });
      let tesoroY = this.state.tesoroY;
      tesoroY = Math.floor(Math.random() * e.target.value);
      this.setState({ tesoroY: tesoroY });
    }
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        {!this.state.iniziata && <Configurazione onChange={this.onChange} />}
        <br />
        <Mappa
          x={this.state.x}
          y={this.state.y}
          tesoroX={this.state.tesoroX}
          tesoroY={this.state.tesoroY}
          onClick={this.onClick}
        />
        <br />
        <Punteggio
          punteggio={this.state.punteggio}
          numeroTentativi={this.state.count}
          finita={this.state.finita}
          onClick={this.onClick}
        />
      </div>
    );
  }
}