"use strict";

class Punteggio extends React.Component {
  render() {
    let punteggio = this.props.punteggio;
    let punteggioMedio = this.props.punteggioMedio;
    let punteggioLancio = this.props.punteggioLancio;
    let finita = this.props.finita;
    return (
      <div className="punteggioDiv">
        <h2>Punteggio</h2>
        <p>Punteggio lancio: {punteggioLancio}</p>
        <div className="punteggioDiv">
          <p>Punteggio medio: {punteggioMedio}</p>
          <p>Punteggio totale: {punteggio}</p>
          <br />
          <button
            className="btn"
            id="reset"
            value="reset"
            onClick={this.props.onClick}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
