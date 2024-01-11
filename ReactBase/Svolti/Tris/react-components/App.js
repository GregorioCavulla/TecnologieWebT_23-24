"use strict";
//Tick Tack Toe
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      griglia: Array(9).fill(""),
      turno: "X",
      vittoria: "",
      punteggioX: 0,
      punteggioO: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let griglia = this.state.griglia;
    let turno = this.state.turno;
    if (griglia[e.target.id] != "") {
      return;
    } else {
      griglia[e.target.id] = turno;
      this.setState({ griglia: griglia });
      this.checkVittoria();
      this.switcTurno();
    }
  }

  switcTurno() {
    let turno = this.state.turno;
    if (turno === "X") {
      this.setState({ turno: "O" });
    } else {
      this.setState({ turno: "X" });
    }
  }

  checkVittoria() {
    let griglia = this.state.griglia;
    let turno = this.state.turno;
    if (
      (griglia[0] === turno && griglia[1] === turno && griglia[2] === turno) ||
      (griglia[3] === turno && griglia[4] === turno && griglia[5] === turno) ||
      (griglia[6] === turno && griglia[7] === turno && griglia[8] === turno) ||
      (griglia[0] === turno && griglia[3] === turno && griglia[6] === turno) ||
      (griglia[1] === turno && griglia[4] === turno && griglia[7] === turno) ||
      (griglia[2] === turno && griglia[5] === turno && griglia[8] === turno) ||
      (griglia[0] === turno && griglia[4] === turno && griglia[8] === turno) ||
      (griglia[2] === turno && griglia[4] === turno && griglia[6] === turno)
    ) {
      console.log(turno + " ha vinto");
      if (turno === "X") {
        this.setState({ punteggioX: this.state.punteggioX + 1 });
      } else {
        this.setState({ punteggioO: this.state.punteggioO + 1 });
      }
      this.setState({ vittoria: turno });
      this.reset();
    } else if (!griglia.includes("")) {
      this.setState({ vittoria: "Pareggio" });
      this.reset();
    }
  }

  reset() {
    this.setState({ griglia: Array(9).fill(""), turno: "X" });
  }

  resetPunteggio() {
    this.reset();
    this.setState({ punteggioX: 0, punteggioO: 0 });
  }

  render() {
    return (
      <div className="application-body">
        <h1>Tick Tack Toe</h1>
        <Punteggio
          vincitore={this.state.vittoria}
          punteggioO={this.state.punteggioO}
          punteggioX={this.state.punteggioX}
          onClick={this.onClick}
        />
        <Griglia onClick={this.onClick} griglia={this.state.griglia} />
        <br />
        <button onClick={() => this.resetPunteggio()}>ResetAll</button>
      </div>
    );
  }
}
