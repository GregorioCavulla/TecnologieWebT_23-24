"use strict";

class Statistiche extends React.Component {
  render() {
    let classifica = this.props.classifica;
    let velocita = this.props.velocita;
    let durata = this.props.durata;
    let finita = this.props.finita;
    let parimerito = this.props.parimerito;
    let macchineParimerito = this.props.macchineParimerito;
    let n = this.props.numeroMacchine;
    let classString = [];
    let velocitaString = [];
    for (let i = 0; i < n; i++) {
      console.log("faccio push di " + classifica[i]);
      classString.push(
        <Text prop={"Macchina " + (i + 1) + ": " + classifica[i]} />
      );
    }
    console.log(classString);

    for (let i = 0; i < n; i++) {
      console.log("faccio push di " + velocita[i]);
      velocitaString.push(
        <p>
          Macchina {i + 1}: {velocita[i]}
        </p>
      );
    }
    console.log(velocitaString);
    if (parimerito) {
      return (
        <div className="pista">
          <h2>Classifica</h2>
          {classString}
          <p>Parimerito tra le macchine {macchineParimerito[0]}</p>
          <p>Parimerito tra le macchine {macchineParimerito[1]}</p>
          {finita && (
            <div>
              <h2>Gara finita! ha vinto la macchina {classifica[0]}</h2>
              <h2>La gara è durata {durata} secondi</h2>
              <h2>Velocità:</h2>
              {velocitaString}
              <br />
              <button id="reset" onClick={this.props.onClick}>
                Reset
              </button>
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="pista">
        <h2>Classifica</h2>
        {classString}
        {finita && (
          <div>
            <h2>Gara finita! ha vinto Macchina {classifica[0]}</h2>
            <h2>La gara è {durata} secondi</h2>
            <h2>Velocità:</h2>
            {velocitaString}
            <br />
            <button id="reset" onClick={this.props.onClick}>
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}
