"use strict";

class Estrazione extends React.Component {
  render() {
    let giocata = this.props.giocata;
    let estratti = this.props.estratti;
    let vittoria = this.props.vittoria;
    let colori = this.props.colori;

    return (
      <div>
        <h2>Estrazione</h2>
        {vittoria != "" && <h3>Hai fatto {vittoria}!</h3>}
        <br />
        {giocata != 2 && (
          <button id="estrai" onClick={this.props.onClick}>
            Estrai numeri
          </button>
        )}
        <br />

        {giocata === 2 && (
          <div className="...">
            <input
              type="text"
              id="0"
              style={{ backgroundColor: colori[0] }}
              value={estratti[0]}
            />
            <input
              type="text"
              id="1"
              style={{ backgroundColor: colori[1] }}
              value={estratti[1]}
            />
            <input
              type="text"
              id="2"
              style={{ backgroundColor: colori[2] }}
              value={estratti[2]}
            />
            <input
              type="text"
              id="3"
              style={{ backgroundColor: colori[3] }}
              value={estratti[3]}
            />
            <input
              type="text"
              id="4"
              style={{ backgroundColor: colori[4] }}
              value={estratti[4]}
            />
          </div>
        )}
      </div>
    );
  }
}
