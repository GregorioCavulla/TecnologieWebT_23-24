"use strict";

class Credito extends React.Component {
  render() {
    let iniziale = this.props.iniziale;
    let finale = this.props.finale;

    return (
      <div className="...">
        <p>Credito iniziale: {iniziale}</p>
        <p>Credito finale: {finale}</p>
      </div>
    );
  }
}
