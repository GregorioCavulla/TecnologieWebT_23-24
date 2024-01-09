import React from "react"


function NewTask(props) {
	return <div>
			<input type="text" value={props.textValue} onChange={props.textHandleChange}/>
			<button type="button" onClick={props.onClick}>submit</button>
		</div>
}


export default NewTask
