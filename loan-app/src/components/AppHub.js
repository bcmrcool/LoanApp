import React from 'react'
import { connect } from 'react-redux'
import { sendApplicantData } from '../actions/index'
import InputForm from './InputForm/InputForm'


class AppHub extends React.Component {

	render() {
		const { sendApplicantData, pageLevelErrorMessage } = this.props
		debugger
		return (
			<div>
				{pageLevelErrorMessage && <div>{pageLevelErrorMessage}</div>}
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