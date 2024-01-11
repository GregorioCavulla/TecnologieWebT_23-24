"use strict";

class Visualizzazione extends React.Component {
  render() {
    let numeri = this.props.numeri;
    return (
      <div className="...">
        <h2>Visualizzazione</h2>
        <br />
        <input type="text" id="0" value={numeri[0]} />
        <input type="text" id="0" value={numeri[1]} />
        <input type="text" id="0" value={numeri[2]} />
        <input type="text" id="0" value={numeri[3]} />
        <input type="text" id="0" value={numeri[4]} />
      </div>
    );
  }
}
