import React from "react"
import NumPad from "./NumPad"
import SciPad from "./SciPad"
import AritPad from "./AritPad"


function Keyboard(props) {
	

	return <div>
			<NumPad {...props}/>
			<AritPad {...props}/>
			{props.scientific ? <SciPad {...props}/> : ""}
		</div>

}

export default Keyboard

