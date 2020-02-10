import React from 'react'
import './DeniedPage.css'

const DeniedPage = (props) => {
	debugger
	return (
		<div className="denialContent">
			<h3>We're sorry! You're disqualified!</h3>
			<div style={{"padding":"10px"}}>{props.match.params.message}</div>
			<div>For further information, please contact <span style={{"font-weight":"bold"}}>1-555-555-LOAN</span></div>
		</div>
	)
}

export default DeniedPage