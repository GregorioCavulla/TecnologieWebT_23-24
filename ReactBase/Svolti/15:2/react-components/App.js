"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      iniziale: 0,
      finale: 0,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(e) {}

  onChange(e) {
    let id = e.target.id;
    let value = e.target.value;

    if (id === "credito") {
      this.setState({ iniziale: value });
    }
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <Configurazione onChange={this.onChange} />
        {this.state.iniziale > 0 && (
          <div id="gioco">
            <Gioco iniziale={this.state.iniziale} finale={this.state.finale} />
            <br />
            <Credito
              iniziale={this.state.iniziale}
              finale={this.state.finale}
            />
          </div>
        )}
      </div>
    );
  }
}
