import React from "react"
import FormIscrizione from "./FormIscrizione"
import Lavagna from "./Lavagna"

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			formState: {
				email: "",
				password: "",
				nazione: "",
			},
			lavList: []
		}
	}
	
	handleChange = (e) => {
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.setState(prev => ({
			formState: {
				...prev.formState,
				[name]: value
			}
		}))
	}

	handleClick = () => {
		let {email, password, nazione} = this.state.formState
		if (email == "" || password == "" || nazione == "")
			return
		this.setState(prev => ({
			formState: {
				email: "",
				password: "",
				nazione: "",
			},
			lavList: [...prev.lavList, prev.formState] 
		}))
	}

	render() {
		return <div className="wrapper">
				<div className="left">
					<FormIscrizione 
					onChange={this.handleChange}
					onClick={this.handleClick}
					{... this.state.formState}/></div>
				<div className="right">
					<Lavagna list={this.state.lavList}/>
				</div></div>
	}
}

export default App
