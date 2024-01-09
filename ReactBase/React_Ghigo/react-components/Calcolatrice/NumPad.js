import react from "react"


function NumPad(props) {
	const data = [
		["CE", "C", "=", "0"],
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		["(", ")", "."],
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

export default NumPad
