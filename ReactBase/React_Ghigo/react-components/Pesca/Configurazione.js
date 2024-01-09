import React from "react";

class Configurazione extends React.Component {
  constructor() {
    super();

    this.aggiorna = this.aggiorna.bind(this);
  }

  aggiorna(e) {
    var valore = {};
    valore["nome"] = e.target.name;
    valore["val"] = e.target.value;

    this.props.aggiorna(valore);
  }

  render() {
    return (
      <div className="Configurazione">
        <label for="Larghezza">Larghezza: </label>
        <input
          type="number"
          id="Larghezza"
          name="Larghezza"
          onChange={this.aggiorna}
          min="8"
        />
        <br />
        <label for="Lunghezza">Lunghezza: </label>
        <input
          type="number"
          id="Lunghezza"
          name="Lunghezza"
          onChange={this.aggiorna}
          min="8"
        />
        <br />
        <label for="Lanci">Numero lanci: </label>
        <input
          type="number"
          id="Lanci"
          name="Lanci"
          onChange={this.aggiorna}
          min="1"
        />
        <br />
        <button id="gen" onClick={this.props.genera}>
          Genera
        </button>
      </div>
    );
  }
}

export default Configurazione;
