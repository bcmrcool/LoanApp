import { SET_PAGE, SET_PAGE_LEVEL_ERROR_MESSAGE } from '../constants/action-types'

const initialState = {
	currentPage: 'landing',
	pageLevelErrorMessage: null
}

function rootReducer(state = initialState, action) {
	switch(action.type){
		case SET_PAGE: {
			return Object.assign({}, state, {
				currentPage: action.pageType
			})
		}
		case SET_PAGE_LEVEL_ERROR_MESSAGE: {
			debugger
			return Object.assign({}, state, {
				pageLevelErrorMessage: action.message
			})
		}
		default: {
			return state
		}
	}
}

export default rootReducer