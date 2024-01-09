'use strict';

class Output extends React.Component {

	 constructor(){
        super();
        this.rimuovi = this.rimuovi.bind(this);
  	}
  	
  	rimuovi(e){
		 this.props.rimuovi(e.target.outerText);
	  }

    render() {
    return (
        <div className="out">
            {this.props.todo.map((el, index) => 
                <button onClick={this.rimuovi} id={`${index}`}>{el}</button>
            )}
        </div>
        );
    }
}