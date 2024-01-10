"use strict";

class Compilazione extends React.Component {
  render() {
    let giocata = this.props.giocata;
    return (
      <div className="...">
        <h2>Compilazione</h2>
        <br />
        <button id="genera" onClick={this.props.onClick}>
          Genera scheda vuota
        </button>
        {giocata === 0 && (
          <div>
            <input id="0" onChange={this.props.onChange} />
            <input id="1" onChange={this.props.onChange} />
            <input id="2" onChange={this.props.onChange} />
            <input id="3" onChange={this.props.onChange} />
            <input id="4" onChange={this.props.onChange} />
            <br />
            <button id="invia" onClick={this.props.onClick}>
              Invia scheda
            </button>
          </div>
        )}
      </div>
    );
  }
}
