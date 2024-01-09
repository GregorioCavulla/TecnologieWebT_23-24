'use strict';

class FormIscrizione extends React.Component {
	
	  constructor(){
        super();
        this.state = {
        email: "",
        password: "",
        paese: ""
        }
        
        this.aggiorna = this.aggiorna.bind(this);
        this.controllaCampi = this.controllaCampi.bind(this);
  	}
  	
  	
  	aggiorna(e){
		const temp = {};
        temp[e.target.name] = e.target.value;
        this.setState(temp);
	}
	
	
	controllaCampi(){
		let errori = [];

        if (this.state.email.length == 0){
            errori.push("Email Vuota");
        }
        if (!this.state.email.includes('@') || !this.state.email.includes('.')){
            errori.push("Email non valida");
        }

        if (this.state.password.length == 0){
            errori.push("PAssword vuota");
        }

        if (this.state.paese.length == 0){
            errori.push("Paese vuoto");
        }

        for(var i=0; i < errori.length;i++) alert(errori[i]);
		
		if(errori.length == 0){
			this.props.iscrizione({email: this.state.email, password: this.state.password, paese: this.state.paese });
		}
		      
	}
	
	
    render() {
        return (
           <div className="FormIscrizione">
				<label for="email">Email:</label>
                <input type="text" id="email" name="email" value={this.state.email} onChange={this.aggiorna}/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.aggiorna}/><br/>
                <label for="paese">Paese:</label>
                <select id="paese" name="paese" onChange={this.aggiorna}> 
                {!this.state.paese ? 
                        <option value="" disabled selected>Seleziona una paese</option>
                        : 
                        <option value="" disabled>Seleziona un paese</option>
                    }
                    {this.state.paese == "italia" ? 
                        <option value="italia" selected>Italia</option>
                        : 
                        <option value="italia">Italia</option>
                    }
                    {this.state.paese == "francia" ? 
                        <option value="francia" selected>Francia</option>
                        : 
                        <option value="francia">Francia</option>
                    }
                    {this.state.paese == "svizzera" ? 
                        <option value="svizzera" selected>Svizzera</option>
                        : 
                        <option value="svizzera">Sizzera</option>
                    }
                    {this.state.paese == "germania" ? 
                        <option value="germania" selected>Germania</option>
                        : 
                        <option value="germania">Germania</option>
                    }
                </select> <br/>
                <button onClick={this.controllaCampi}>Iscriviti</button>
            </div>
        );
    }
}