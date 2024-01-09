"use strict";

import React from "react";

class Lago extends React.Component {
  constructor() {
    super();

    this.state = {
      prova: "",
    };

    this.click = this.click.bind(this);
  }

  click(e) {
    console.log("Premuto: ", e.target.id);

    var pesci = this.props.Pesci;
    var tasto = e.target.id.split("-");
    var y = parseInt(tasto[0]);
    var x = parseInt(tasto[1]);
    var punti = 0;

    if (document.getElementById(e.target.id).innerText != "") {
      return;
    }

    document.getElementById(e.target.id).innerText = pesci[y][x];
    punti += parseInt(pesci[y][x]);

    var altraX = x - 1;
    var altraY = y - 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x + 1;
    var altraY = y + 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x - 1;
    var altraY = y + 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x + 1;
    var altraY = y - 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x;
    var altraY = y - 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x;
    var altraY = y + 1;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x - 1;
    var altraY = y;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    var altraX = x + 1;
    var altraY = y;

    if (
      altraX >= 0 &&
      altraY >= 0 &&
      altraX <= parseInt(this.props.Larghezza) - 1 &&
      altraY <= parseInt(this.props.Lunghezza) - 1
    ) {
      if (document.getElementById(`${altraY}-${altraX}`).innerText == "")
        punti += parseInt(pesci[altraY][altraX]);
      document.getElementById(`${altraY}-${altraX}`).innerText =
        pesci[altraY][altraX];
    }

    this.props.aumenta(punti);
  }

  render() {
    const matrice = [];

    if (this.props.Gen == 1) {
      for (let i = 0; i < this.props.Lunghezza; i++) {
        const righa = [];
        for (let j = 0; j < this.props.Larghezza; j++) {
          righa.push(
            <button
              id={`${i}-${j}`}
              ref={this.buttonRef}
              style={{
                width: "30px",
                height: "30px",
                margin: "2px",
                fontSize: "14px",
              }}
              onClick={this.click}
            ></button>
          );
        }
        matrice.push(<div id={i}>{righa}</div>);
      }
    }
    return matrice;
  }
}

export default Lago;
