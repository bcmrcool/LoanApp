import { SET_PAGE } from '../constants/action-types'

const initialState = {
	currentPage: 'landing',
	errorMessage: null
}

function rootReducer(state = initialState, action) {
	switch(action.type){
		case SET_PAGE: {
			return Object.assign({}, state, {
				currentPage: action.pageType
			})
		}
		default: {
			return state
		}
	}
}

export default rootReducer