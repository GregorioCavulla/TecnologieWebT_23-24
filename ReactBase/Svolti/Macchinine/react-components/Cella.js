"use strict";

class Cella extends React.Component {
  render() {
    let contenuto = this.props.contenuto;
    let colore = this.props.colore;
    if (contenuto == 0) {
      contenuto = "partenza";
    } else if (contenuto == 10) {
      contenuto = "arrivo";
    } else if (contenuto == "macchina") {
      contenuto = "🚗";
    }
    return (
      <div
        className="cella"
        //change style to font color
        style={{ color: "hsl(" + colore + ", 100%, 50%)" }}
      >
        {contenuto}
      </div>
    );
  }
}
