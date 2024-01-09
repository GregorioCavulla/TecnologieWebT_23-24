"use strict";

class Scientific extends React.Component {
  render() {
    return (
      <div className="scientific">
        <button name="ln(x)" onClick={this.props.onClick}>
          ln(x)
        </button>
        <button name="sqrt(x)" onClick={this.props.onClick}>
          sqrt(x)
        </button>
        <button name="e^x" onClick={this.props.onClick}>
          e^x
        </button>
        <button name="1/x" onClick={this.props.onClick}>
          1/x
        </button>
      </div>
    );
  }
}
