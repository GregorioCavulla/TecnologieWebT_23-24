'use strict';

class Input extends React.Component {
	
	  constructor(){
        super();
        this.state = {
        }
        
        this.aggiungi = this.aggiungi.bind(this);
  	}
  	
  	
  	aggiungi(){
     	var valore = document.getElementById("todo").value;
     	
     	this.props.aggiungi(valore);
	}
	
    render() {
        return (
           <div className="Input">
				<label for="todo">ToDo:</label>
                <input type="text" id="todo" name="todo"/><br/>
                <button onClick={this.aggiungi}>Aggiungi</button>
            </div>
        );
    }
} 