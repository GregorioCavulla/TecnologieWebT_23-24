"use strict";

class Configurazione extends React.Component {
  render() {
    return (
      <div className="configDiv">
        <h2>Configurazione</h2>
        <label for="y">Inserisci credito: </label>
        <input
          className="numberInput"
          type="number"
          id="credito"
          onChange={this.props.onChange}
          min={5}
          max={99}
        ></input>
      </div>
    );
  }
}
