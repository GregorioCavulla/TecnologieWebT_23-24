"use strict";

class Riga extends React.Component {
  render() {
    let id = this.props.id;
    let posizione = this.props.posizione;
    let colore = this.props.colore;

    let numCelle = 11;
    let celle = [];
    celle.push(<input type="hidden" id="idRiga" value={id} />);
    for (let i = 0; i < numCelle; i++) {
      if (i == posizione) {
        celle.push(<Cella contenuto="macchina" colore={colore} />);
      } else {
        celle.push(<Cella contenuto={i} colore={colore} />);
      }
    }

    return (
      <div className="riga">
        <p>Macchina {id + 1}</p>
        {celle}
      </div>
    );
  }
}
