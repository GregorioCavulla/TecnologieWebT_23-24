'use strict';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            todo: [],
        }
        this.aggiungi = this.aggiungi.bind(this); 
        this.rimuovi =this.rimuovi.bind(this);
         
  }
  
  aggiungi(todo){
	  
	  console.log("Aggiunta", todo);
	  
	  const nuovo_todo = this.state.todo;
      nuovo_todo.push(`${todo}`);
		
        this.setState({
            todo: nuovo_todo,
        })
  }
  
  
  rimuovi(id){
	  
	  console.log("Rimuovi", id);
	  
	  const nuovo_todo = this.state.todo.filter(item => item !== id);
		
        this.setState({
            todo: nuovo_todo,
        })
	 
  }

  render() {
      return (

        <div className="DaFare">
            <Input aggiungi={this.aggiungi} /> <hr/>
            <Output todo={this.state.todo} rimuovi={this.rimuovi}/>
        </div>

      );
  }
}
