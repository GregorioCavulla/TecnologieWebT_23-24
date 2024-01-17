"use strict";

class Carta extends React.Component {
  render() {
    let value = this.props.value;
    let color = this.props.color;
    let border = this.props.border;

    return (
      <input
        type="text"
        style={{
          width: "30px",
          height: "50px",
          border: border,
          fontSize: "14px",
          backgroundColor: color,
          margin: "2px",
        }}
        value={value}
        readonly="readonly"
      />
    );
  }
}
