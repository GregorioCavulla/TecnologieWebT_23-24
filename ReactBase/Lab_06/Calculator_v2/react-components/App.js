"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      equal: "",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let button = e.target.name;
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if (button === "ln(x)") {
      this.setState({
        result: Math.log(eval(this.state.result)),
      });
    } else if (button === "1/x") {
      this.setState({
        result: 1 / eval(this.state.result),
      });
    } else if (button === "e^x") {
      this.setState({
        result: Math.exp(eval(this.state.result)),
      });
    } else if (button === "sqrt(x)") {
      this.setState({
        result: Math.sqrt(eval(this.state.result)),
      });
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  }

  calculate() {
    try {
      this.setState({
        equal: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        equal: "error",
      });
    }
  }

  reset() {
    this.setState({
      result: "",
      equal: "",
    });
  }

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  }

  render() {
    return (
      <div className="calculator-body">
        <h1>Calcolatrice</h1>
        <Display result={this.state.result} />
        <Display result={this.state.equal} />
        <KeyBoard onClick={this.onClick} />
        <br />
        <Scientific onClick={this.onClick} enable={this.state.enable} />
      </div>
    );
  }
}
