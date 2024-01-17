"use strict";

class Tavolo extends React.Component {
  render() {
    this.carte = this.props.carte;
    this.giocatore = this.props.giocatore;
    this.iniziata = this.props.iniziata;

    let righe = [];

    let value = "";
    let color = "";
    let border = "";

    for (let i = 0; i < 13; i++) {
      let carta = this.carte[i];
      if (this.giocatore) {
        //carte giocatore
        if (carta === 0) {
          value = "";
          color = "rgb(255,255,255)";
          border = "2px solid rgb(200, 0, 0)";
        } else if (carta === "figura") {
          value = "figura";
          color = "rgb(255,255,0)";
          border = "2px solid rgb(200, 0, 0)";
        } else {
          value = carta;
          color = "rgb(255,255,255)";
          border = "2px solid rgb(200, 0, 0)";
        }
      } else {
        //carte banco
        if (carta === 0) {
          value = "";
          color = "rgb(255,255,255)";
          border = "2px solid rgb(0, 200 , 0)";
        } else if (carta === "figura") {
          value = "figura";
          color = "rgb(255,255,0)";
          border = "2px solid rgb(0, 200 , 0) ";
        } else {
          value = carta;
          color = "rgb(255,255,255)";
          border = "2px solid rgb(0, 200 , 0)";
        }
      }
      righe.push(<Carta value={value} color={color} border={border} />);
    }

    return (
      <div className="...">
        <h2>{this.giocatore ? "Giocatore" : "Banco"}</h2>
        <p>{righe}</p>
        <br />
        {this.giocatore && (
          <div className="controlli">
            {!this.iniziata && (
              <div id="puntata">
                <lable for="scommessa">Puntata: </lable>
                <input
                  type="number"
                  id="scommessa"
                  min="1"
                  max={this.props.credito}
                  onChange={this.props.onChange}
                />
              </div>
            )}
            <button id="giocatore" onClick={this.props.onClick}>
              Carta
            </button>
            <button id="stop" onClick={this.props.onClick}>
              Stop
            </button>
          </div>
        )}
      </div>
    );
  }
}
