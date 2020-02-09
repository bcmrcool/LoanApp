import React from 'react'
import { connect } from 'react-redux'
import { setPage, sendApplicantData } from '../actions/index'
import InputForm from './InputForm/InputForm'


class AppHub extends React.Component {

	handleClick = async () => {
		this.props.setPage('successPage')
	}

	render() {
		const { sendApplicantData } = this.props
		return(
			<div>
				<InputForm sendData={sendApplicantData} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentPage: state.currentPage
})

const mapDispatchToProps = dispatch => ({
	setPage: pageType => dispatch(setPage(pageType)),
	sendApplicantData: data => dispatch(sendApplicantData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHub)