"use strict";

const { Component } = require("react");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: "",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {}

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <Component onClick={this.onClick} state={this.state.state} />
      </div>
    );
  }
}
