"use strict";

class Mappa extends React.Component {
  render() {
    let y = this.props.y;
    let x = this.props.x;
    let tesoroX = this.props.tesoroX;
    let tesoroY = this.props.tesoroY;

    let righe = [];

    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        if (j == tesoroX && i == tesoroY) {
          righe.push(
            <button
              id="tesoro"
              className="cella tesoro"
              style={{
                width: "30px",
                height: "30px",
                margin: "2px",
                fontSize: "14px",
                backgroundColor: "gray",
              }}
              value="T"
              onClick={this.props.onClick}
            ></button>
          );
        } else {
          righe.push(
            <button
              id={i * 100 + j}
              className="cella"
              style={{
                width: "30px",
                height: "30px",
                margin: "2px",
                fontSize: "14px",
                backgroundColor: "gray",
              }}
              value=""
              onClick={this.props.onClick}
            ></button>
          );
        }
      }
      righe.push(<br />);
    }

    return <div className="...">{righe}</div>;
  }
}
