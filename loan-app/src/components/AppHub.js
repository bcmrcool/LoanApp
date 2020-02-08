import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions/index'

class AppHub extends React.Component {
	render() {
		return(
			<div>
				<div>
					You are on the {this.props.currentPage}
				</div>
				<button type="submit" onClick={() => this.props.setPage('successPage')}>
					Click here!
				</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentPage: state.currentPage
})

const mapDispatchToProps = dispatch => ({
	setPage: pageType => dispatch(setPage(pageType))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHub)