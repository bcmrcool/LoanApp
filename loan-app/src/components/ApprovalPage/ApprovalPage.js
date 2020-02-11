import React from 'react'
import './ApprovalPage.css'

class ApprovalPage extends React.Component {

	constructor(){
		super()
		this.state = {
			created: false,
			errors: {
				email: false,
				passwordShort: false,
				passwordUnsafe: false,
				passwordNotSame: false
			}
		}
	}

	headerText(){
		const { created } = this.state
		return(
			created ? <div>Thanks, new account created!</div> : <div>Create an account below.</div>
		)
	}

	handleSubmit = (event) => {
		event.preventDefault()
		debugger
		console.log('asdf')
		this.setState({created: true})
	}

	onChange = (event) => {
		if (event.target.id === 'password'){
			debugger
			if (!RegExp(event.target.pattern).test(event.target.value)){
				event.target.setCustomValidity("Your password must contain more than 8 characters and a number or special character")
				event.target.reportValidity()
			}
			else event.target.setCustomValidity("")
		} else if (event.target.id === "password-again"){
			if (event.target.value !== document.getElementById('password').value){
				event.target.setCustomValidity("Your password must be the same")
				event.target.reportValidity()
			} else event.target.setCustomValidity("")
		}
	}

	render(){
		const { created } = this.state
		return (
			<div>
				<h3 style={{"font-weight":"bold"}}>Congratulations, you're approved!</h3>
				{this.headerText()}
				{!created && <form className="form" onSubmit={this.handleSubmit}>
					<div className="formColumn">
						<span>Your User Name (email)</span>
						<span>Password </span> 
						<span>Password (again)</span>
					</div>
					<div className="formColumn">
						<input id="userName" name="userName" type="email" required />
						<input id="password" name="password" pattern="(?=.*?[#?!@$%^&*-1234567890]).{9,}" type="password" onChange={this.onChange} required />
					 	<input id="password-again" pattern=".{8,}" onChange={this.onChange} name="password-again" type="password" required />
						<button className="formButton">Submit</button>
					</div>
					<div className="errorColumn">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</form>}
			</div>
		)
	}
}

export default ApprovalPage