import React from 'react'
import './InputForm.css'

class InputForm extends React.Component {
	constructor() {
		super()
		this.state = {
			errors: {
				autoPurchasePrice: false,
				autoMake: false,
				autoModel: false,
				userIncome: false,
				creditScore: false
			}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	validateInput = (event) => {
		let { errors } = this.state
		if (event.type == 'blur' || event.target.value >= 300) {
			const currentFieldValue = event.target.value
			const fieldRegExp = RegExp(event.target.pattern)
			const isValidInput = fieldRegExp.test(currentFieldValue)
			let currentErrors = errors
			errors[event.target.id] = !isValidInput
			this.setState({ errors })
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		const { sendData } = this.props
		let userAnswers = {}
		const userData = new FormData(event.target)
		for (var key of userData.keys()) {
   			userAnswers[key] = userData.get(key)
		}
		sendData(userAnswers)
	}

	render(){
		const { errors } = this.state
		return (
			<form className="inputForm" onSubmit={this.handleSubmit}>
				<label htmlFor="autoPurchasePrice">Enter Auto Purchase Price</label>
				<span>$<input id="autoPurchasePrice" name="autoPurchasePrice" type="number" required /></span>
				<label htmlFor="autoMake">Enter Auto Make</label>
				<input id="autoMake" name="autoMake" type="text" required />
				<label htmlFor="autoModel">Enter Auto Model</label>
				<input id="autoModel" name="autoModel" type="text" required />
				<label htmlFor="userIncome">Enter Your Estimated Yearly Income</label>
				<span>$<input id="userIncome" name="userIncome" type="number" required /></span>
				<label htmlFor="creditScore">Enter Credit Score (300-850)</label>
				<input className={errors["creditScore"] ? 'error' : ''} id="creditScore" onChange={this.validateInput} onBlur={this.validateInput} name="creditScore" type="number" pattern="\b([3-7][0-9]{2}|8[0-4][0-9]|850)\b" min="300" max="850" />
				<button>Submit</button>
			</form>
		)
	}
}

export default InputForm