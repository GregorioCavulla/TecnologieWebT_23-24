"use strict";
//Tick Tack Toe
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      griglia: Array(9).fill(""),
      turno: "X",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let griglia = this.state.griglia;
    let turno = this.state.turno;
    griglia[e.target.id] = turno;
    this.setState({ griglia: griglia });
    this.checkVittoria();
    this.switcTurno();
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
    let vittoria;
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
      vittoria = turno;
    }
    return vittoria;
  }

  reset() {
    this.setState({ griglia: Array(9).fill("") });
  }

  render() {
    return (
      <div className="application-body">
        <h1>Tick Tack Toe</h1>
        <Punteggio vittoria={this.checkVittoria()} onClick={this.onClick} />
        <Griglia onClick={this.onClick} griglia={this.state.griglia} />
      </div>
    );
  }
}
