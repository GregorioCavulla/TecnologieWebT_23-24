"use strict";

class Statistiche extends React.Component {
  render() {
    let classifica = this.props.classifica;
    let velocita = this.props.velocita;
    let durata = this.props.durata;
    let finita = this.props.finita;

    return (
      <div className="pista">
        <h2>Classifica</h2>
        <p>1°: {classifica[0]}</p>
        <p>2°: {classifica[1]}</p>
        <p>3°: {classifica[2]}</p>
        <p>4°: {classifica[3]}</p>
        {finita && (
          <div>
            <h2>Gara finita! ha vinto {classifica[0]}</h2>
            <h2>La gara è {durata} secondi</h2>
            <h2>Velocità:</h2>
            <p>Macchina 1: {velocita[0]}</p>
            <p>Macchina 2: {velocita[1]}</p>
            <p>Macchina 3: {velocita[2]}</p>
            <p>Macchina 4: {velocita[3]}</p>
            <br />
            <button id="reset" onClick={this.props.onClick}>
              Reset
            </button>
          </div>
        )}
        <br />
        {righe}
      </div>
    );
  }
}
