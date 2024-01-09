"use strict";

import React from "react";

class Punteggio extends React.Component {
  constructor() {
    super();
  }

  render() {
    const risultato = [];

    risultato.push(<p>Pesci pescati: {this.props.Punti}</p>);

    if (this.props.Fine == 1) {
      var media = parseInt(this.props.Punti) / parseInt(this.props.Lanci);

      risultato.push(<p>Punteggio medio per lancio: {media}</p>);
    }

    return risultato;
  }
}

export default Punteggio;
