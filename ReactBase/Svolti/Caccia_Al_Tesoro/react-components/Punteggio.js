"use strict";

class Punteggio extends React.Component {
  render() {
    let punteggio = this.props.punteggio;
    let numeroTentativi = this.props.numeroTentativi;
    let finita = this.props.finita;
    return (
      <div className="punteggioDiv">
        <h2>Punteggio</h2>
        <p>Numero tentativi: {numeroTentativi}</p>
        {finita && (
          <div className="punteggioDiv">
            <p className="outputText">Hai fatto {punteggio} punti</p>
            <button
              className="btn"
              id="reset"
              value="reset"
              onClick={this.props.onClick}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}
