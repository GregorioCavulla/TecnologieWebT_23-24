"use strict";

class Configurazione extends React.Component {
  render() {
    return (
      <div className="...">
        <input type="number" min={2} max={4} id="numberOfCars" />
        <button id="configura" onClick={this.props.onClick}>
          Configura
        </button>
      </div>
    );
  }
}
