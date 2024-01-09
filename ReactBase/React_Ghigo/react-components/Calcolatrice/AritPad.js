import react from "react"


function OpsPad(props) {
	const data = [
		["+", "-"],
		["X", ":"],
	]


	return <div>
		{data.map(row => {
			return <div className="row"> 
				{row.map(t => {
					return <button className="col" key={t} value={t} onClick={props.handleClick}>{t}</button>
			})} </div>
		})}
		</div>



}

export default OpsPad
