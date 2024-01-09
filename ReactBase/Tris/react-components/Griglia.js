"use strict";

class Griglia extends React.Component {
  render() {
    let griglia = this.props.griglia;
    return (
      <div className="griglia">
        <button id="0" onClick={this.props.onClick}>
          {griglia[0]}
        </button>
        <button id="1" onClick={this.props.onClick}>
          {griglia[1]}
        </button>
        <button id="2" onClick={this.props.onClick}>
          {griglia[2]}
        </button>
        <br />
        <button id="3" onClick={this.props.onClick}>
          {griglia[3]}
        </button>
        <button id="4" onClick={this.props.onClick}>
          {griglia[4]}
        </button>
        <button id="5" onClick={this.props.onClick}>
          {griglia[5]}
        </button>
        <br />
        <button id="6" onClick={this.props.onClick}>
          {griglia[6]}
        </button>
        <button id="7" onClick={this.props.onClick}>
          {griglia[7]}
        </button>
        <button id="8" onClick={this.props.onClick}>
          {griglia[8]}
        </button>
      </div>
    );
  }
}
