import React from "react"


function ListItems(props) {
	const list = props.list.map(a => <li onClick={() => props.onChange(a.id)}>{a.text}</li>)
	return <div><ul>
				{list}
			</ul></div>
}


export default ListItems
