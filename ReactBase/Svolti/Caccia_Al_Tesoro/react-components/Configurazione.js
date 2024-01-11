"use strict";

class Configurazione extends React.Component {
  render() {
    let prop = this.props.prop;
    return (
      <div className="...">
        <h2>Configurazione</h2>
        <label for="y">Inserisci righe: </label>
        <input
          type="number"
          id="y"
          onChange={this.props.onChange}
          min={5}
          max={99}
        ></input>
        <br />
        <label for="x">Inserisci colonne: </label>
        <input
          type="number"
          id="x"
          onChange={this.props.onChange}
          min={5}
          max={99}
        ></input>
      </div>
    );
  }
}
