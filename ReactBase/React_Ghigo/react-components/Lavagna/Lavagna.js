import React from "react"



function Lavagna(props) {
	let elements = props.list.map(a => `${a.email} - ${a.password} - ${a.nazione}`)
	return <textarea value={elements.join("\n")}></textarea>
}

export default Lavagna
