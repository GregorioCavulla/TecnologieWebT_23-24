'use strict';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            Larghezza: 8,
        	Lunghezza: 8,
        	Lanci: 0,
        	Fatti: 0,
        	Punti: 0,
        	Gen: 0,
        	Fine: 0,
        	Pesci: [],
        	
        }
        this.aggiorna = this.aggiorna.bind(this); 
        this.genera = this.genera.bind(this);
        this.aumenta = this.aumenta.bind(this);
         
  }
  
  aggiorna(valore){
	  
	  console.log("Aggiorno", valore.nome, valore.val);
	  
	  const temp = {};
      temp[valore.nome] = valore.val;
      this.setState(temp);
      
  }
  
  genera(){
	  
	  const temp = {};
      temp["Gen"] = 1;
      
      var pesci= [];
      
      for(let i=0; i<this.state.Lunghezza; i++){
		  
		  var riga = [];
		  
		  for(let j=0; j<this.state.Larghezza; j++){
			  var p = Math.floor(Math.random()* 5);
			  riga.push(`${p}`);
		  }
		  
		  pesci.push(riga);
		  
	  }
      
	  temp["Pesci"] = pesci;
	  
	  this.setState(temp);
	  
	  console.log("Genero campo di gioco");
	  console.log("Pesci: ", this.state.Pesci);
  }
  
  
  aumenta(value){
	 	
	  const fatti = this.state.Fatti;
	  const punti = this.state.Punti;
	  const lanci = this.state.Lanci;
	  
	  if((parseInt(fatti)+1) == lanci){
		  alert("Partita terminata: numero di lanci raggiunto!");
		  
		  const temp = {};
		  const new_punti = parseInt(punti) +value;
		  const new_fatti = parseInt(fatti) +1;
		  temp["Fatti"] = new_fatti;
		  temp["Punti"] = new_punti;
		  temp["Fine"] = 1;
     	  this.setState(temp);

	  }else{
	 	
	      const temp = {};
		  const new_punti = parseInt(punti) +value;
		  const new_fatti = parseInt(fatti) +1;
		  temp["Fatti"] = new_fatti;
		  temp["Punti"] = new_punti;
     	  this.setState(temp);
      
      }
  }
  

  render() {
      return (

        <div className="CampoMinato">
            <Configurazione aggiorna={this.aggiorna} genera={this.genera}/> <hr/>
            <Lago Lunghezza={this.state.Lunghezza} Larghezza={this.state.Larghezza} Gen={this.state.Gen}  Pesci={this.state.Pesci} aumenta={this.aumenta}/> <hr/>
        	<Punteggio Punti={this.state.Punti} Fine={this.state.Fine} Lanci={this.state.Fatti} />
        </div>

      );
  }
}
