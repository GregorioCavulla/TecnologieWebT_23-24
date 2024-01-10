"use strict";
//Macchinine
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroMacchine: 0,
      posizioni: [],
      colori: [],
      velocita: [],
      finita: false,
      iniziata: false,
      turno: 0,
      idTimer: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let id = e.target.id;
    if (id == "configura") {
      this.configura();
    } else if (id == "avvia") {
      this.avvia();
    } else if (id == "reset") {
      this.reset();
    }
  }

  reset() {
    console.log(
      "classifica:" +
        this.state.classifica +
        "velocita: " +
        this.state.velocita +
        "durata: " +
        this.state.durata +
        "finita: " +
        this.state.finita
    ),
      this.setState({
        numeroMacchine: 0,
        posizioni: [],
        colori: [],
        velocita: [],
        finita: false,
        iniziata: false,
        turno: 0,
        idTimer: 0,
      });
  }

  configura() {
    const n = document.getElementById("numberOfCars").value;
    var pos = [];
    var col = [];
    for (let o = 0; o < n; o++) {
      pos[o] = 0;
      col[o] = Math.random() * 360;
    }
    this.setState({ numeroMacchine: n, posizioni: pos, colori: col });
  }

  avvia() {
    let idTimer = this.state.idTimer;
    idTimer = setInterval(() => this.gara(), 4000);
    this.setState({ idTimer: idTimer });
  }

  gara() {
    let turno = this.state.turno;
    turno++;
    console.log("turno: " + turno);
    let numeroMacchine = this.state.numeroMacchine;
    console.log("numeroMacchine: " + numeroMacchine);
    let posizioni = this.state.posizioni;
    console.log("posizioni: " + posizioni);
    let idTimer = this.state.idTimer;
    let posizioniNuove = [];

    for (let i = 0; i < numeroMacchine; i++) {
      let posizione = posizioni[i] + Math.floor(Math.random() * 4);
      if (posizione > 10) {
        posizione = 10;
        clearInterval(idTimer);
        this.terminaGara();
      }
      posizioniNuove[i] = posizione;
    }
    console.log("posizioniNuove: " + posizioniNuove);
    this.setState({ posizioni: posizioniNuove, turno: turno });
    this.classifica();
    this.setState({ iniziata: true });
  }

  classifica() {
    let posizioni = this.state.posizioni;
    console.log("posizioni: " + posizioni);
    let classifica = this.state.classifica;
    console.log("classifica: " + classifica);
    ordinate = posizioni.sort();
    for (let i = 0; i < posizioni.length; i++) {
      for (let j = 0; j < posizioni.length; j++) {
        if (posizioni[i] == ordinate[j]) {
          classifica[i] = i;
        }
      }
    }
    console.log("classifica: " + classifica);
    this.setState({ classifica: classifica });
  }

  terminaGara() {
    let turno = this.state.turno;
    let durata = turno * 4;
    let posizioni = this.state.posizioni;
    let velocita = [];
    for (let i = 0; i < posizioni.length; i++) {
      velocita[i] = posizioni[i] / durata;
    }
    this.setState({
      velocita: velocita,
      posizioni: posizioni,
      durata: durata,
      finita: true,
      iniziata: false,
    });
  }

  render() {
    return (
      <div className="application-body">
        <h1>App</h1>
        <Configurazione onClick={this.onClick} />
        <br />
        <Pista
          onClick={this.onClick}
          numeroMacchine={this.state.numeroMacchine}
          posizioni={this.state.posizioni}
          colori={this.state.colori}
        />
        {this.state.iniziata && (
          <Statistiche
            onClick={this.onClick}
            classifica={this.state.classifica}
            velocita={this.state.velocita}
            durata={this.state.durata}
            finita={this.state.finita}
          />
        )}
      </div>
    );
  }
}
