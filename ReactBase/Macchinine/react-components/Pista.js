"use strict";

class Pista extends React.Component {
  render() {
    let numeroMacchine = this.props.numeroMacchine;
    let posizioni = this.props.posizioni;
    let colori = this.props.colori;

    let righe = [];
    for (let i = 0; i < numeroMacchine; i++) {
      righe.push(<Riga id={i} posizione={posizioni[i]} colore={colori[i]} />);
      righe.push(<br />);
    }

    return (
      <div className="pista">
        <button id="avvia" onClick={this.props.onClick}>
          Avvia Gara
        </button>
        {righe}
      </div>
    );
  }
}
