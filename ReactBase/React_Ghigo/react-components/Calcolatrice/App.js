import React from "react"
import Display from "./Display"
import Keyboard from "./Keyboard"



class App extends React.Component {
	
	constructor() {
		super()
		this.state = {
			display: "",
			currentExpression: "",
			scientific: false
		}
	}

	parse(str) {
	  return Function(`'use strict'; return (${str})`)()
	}

	toggle = () => {
		this.setState(prev => ({ scientific: !prev.scientific }));
	}

	handleClick = (ev) => {
		const {value} = ev.target
		try {
			console.log(this.state.currentExpression + this.state.display)
			if ("123456789".includes(value)){ //abcdefghijklmnopqrstuvwxyz
				this.setState(prev => ({display: prev.display + value}))
			} else if ("()+-X:".includes(value)) {
				this.setState((prev) => {
					const operator = value === ":" ? "/" : value === "X" ? "*" : value
					return { 
							currentExpression: prev.currentExpression + prev.display + operator,
							display: ""
						}
				})
			} else if (value === "="){
				this.setState((prev) => ({
					display: this.parse(prev.currentExpression + prev.display),
					currentExpression: ""
				}))
			} else if (value === "C"){
				this.setState({display: ""})
			} else if (value === "CE"){
				this.setState({display: "", currentExpression: ""})
			} else if (value === "log"){
				this.setState(prev => ({
						display: Math.log(this.parse(prev.currentExpression + prev.display)),
						currentExpression: ""
					}))
			} else if (value === "sqrt"){
				this.setState(prev => ({
						display: Math.sqrt(this.parse(prev.currentExpression + prev.display)),
						currentExpression: ""
					}))
			} else if (value === "exp"){
				this.setState(prev => ({
						display: Math.exp(this.parse(prev.currentExpression + prev.display)),
						currentExpression: ""
					}))
			} else if (value === "pi"){
				this.setState(prev => ({
						display: prev.display + "3.14159265359" 
					}))
			}
		} catch (error) {
			this.setState({display:"", currentExpression:""})
		}

	}


	render() {
		return	<div>
			<h1>Calcolatrice</h1>
			<Display display={this.state.display}/>
			<Keyboard handleClick={this.handleClick} scientific={this.state.scientific}/>
			<button name="toggle" onClick={this.toggle}>Toggle Scientific/Aritmetic</button>
		</div>
	}


}

export default App
