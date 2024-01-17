"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(e) {}

  onChange(e) {
    let id = e.target.id;
    let value = e.target.value;
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <Component onClick={this.onClick} state={this.state.state} />
      </div>
    );
  }
}
