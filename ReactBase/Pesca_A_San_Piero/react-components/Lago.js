"use strict";

class Lago extends React.Component {
  render() {
    let y = this.props.y;
    let x = this.props.x;
    let righe = [];

    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
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
            onClick={this.props.onClick}
          ></button>
        );
      }
      righe.push(<br />);
    }
    console.log(righe);

    return <div className="...">{righe}</div>;
  }
}
