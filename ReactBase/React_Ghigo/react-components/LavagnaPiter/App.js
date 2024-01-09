'use strict';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            lavagna_records: [],
        }
        this.iscrizione = this.iscrizione.bind(this); 
        this.cancella = this.cancella.bind(this); 
  }
  
  iscrizione({email, password, paese}){
	  
	  console.log("iscrizione", {email, password, paese});
	  
	  const nuovo_lavagna_records = this.state.lavagna_records;
      nuovo_lavagna_records.push(` - ${email} email, ${password} password, ${paese} paese`);

        this.setState({
            lavagna_records: nuovo_lavagna_records,
        })
  }
  
  cancella(){
        console.log("cancellazione")

        this.setState({
            lavagna_records: [],
        })
    };
  
  

  render() {
      return (

        <div className="Iscrizione">
            <h1>Iscrizioni</h1>
            <FormIscrizione iscrizione={this.iscrizione} /> <hr/>
            <Lavagna lavagna_records={this.state.lavagna_records} cancella={this.cancella} />
        </div>

      );
  }
}
