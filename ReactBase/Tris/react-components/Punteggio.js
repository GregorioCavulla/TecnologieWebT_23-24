"use strict";

class Punteggio extends React.Component {
  render() {
    return (
      <div className="...">
        <p>
          {this.props.vincitore != "" && this.props.vincitore != "Pareggio"
            ? "ha vinto " + this.props.vincitore + "!"
            : ""}
        </p>
        <p>
          {this.props.vincitore == "" && this.props.pareggio == true
            ? "Pareggio!"
            : ""}
        </p>
        <p>
          Punteggio X: {this.props.punteggioX} - Punteggio O:{" "}
          {this.props.punteggioO}
        </p>
      </div>
    );
  }
}
