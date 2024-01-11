"use strict";

class Punteggio extends React.Component {
  render() {
    let punteggio = this.props.punteggio;
    let numeroTentativi = this.props.numeroTentativi;
    let finita = this.props.finita;
    return (
      <div className="...">
        <h2>Punteggio</h2>
        <p>Numero tentativi: {numeroTentativi}</p>
        {finita && (
          <div className="finito">
            <p>Hai fatto {punteggio} punti</p>
            <button id="reset" value="reset" onClick={this.props.onClick}>
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}
