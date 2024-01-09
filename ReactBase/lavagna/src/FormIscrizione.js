import React from "react"

const nazioni = ["", "Italia", "Francia", "Spagna", "Germania"]

function FormIscrizione(props) {
	const selBody = nazioni.map(a => <option value={a}>{a}</option>)
	return <div>
			<input onChange={props.onChange} type="text" name="email" value={props.email}/>
			<input onChange={props.onChange} type="password" name="password" value={props.password}/>
			<select onChange={props.onChange} name="nazione" value={props.nazione}>{selBody}</select>
			<button type="button" onClick={props.onClick}/>
		</div>
}


export default FormIscrizione
