import React from 'react'
import { connect } from 'react-redux'
import { sendApplicantData } from '../actions/index'
import InputForm from './InputForm/InputForm'
import { marketingText } from '../constants/strings'
import './AppHub.css'


class AppHub extends React.Component {

	render() {
		const { sendApplicantData, pageLevelErrorMessage } = this.props
		debugger
		return (
			<div className='mainContent'>
				<h3>Pre Qualify Loan Application Form</h3>
				{pageLevelErrorMessage && <div>Error: {pageLevelErrorMessage}</div>}
				<div style={{'font-size': '14px', width: '70%'}}>{marketingText}</div>
				<InputForm sendData={sendApplicantData} />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	sendApplicantData: data => dispatch(sendApplicantData(data))
})

const mapStateToProps = state => ({
	pageLevelErrorMessage: state.pageLevelErrorMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHub)