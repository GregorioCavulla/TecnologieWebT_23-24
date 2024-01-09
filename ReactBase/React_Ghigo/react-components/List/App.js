import React from "react"
import NewTask from "./NewTask"
import ListItems from "./ListItems"


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			newTaskTextValue: "",
			proplist: [],
			lastId: 0,
		}
	}

	handleTextChange = (e) => {
		this.setState({
			newTaskTextValue: e.target.value 
		})
	}

	handleClickNew = () => {
		this.state.proplist.push({
			id: this.state.lastId,
			text: this.state.newTaskTextValue,
		})
		this.setState(prev => ({
			newTaskTextValue: "",
			lastId: prev.lastId + 1,
		}))
	}

	handleCheck = (id) => {
		this.setState(prev => ({
			proplist: prev.proplist.filter(a => {
				return id != a.id
			})
		}))	
	}

	render() {
		return <div>
				<h1>Lista</h1>
				<NewTask
					textValue={this.state.newTaskTextValue}
					onClick={this.handleClickNew}
					textHandleChange={this.handleTextChange} /> 
				<ListItems
					list={this.state.proplist}
					onChange={this.handleCheck} />
			</div>
	}



}

export default App
