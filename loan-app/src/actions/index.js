import { SET_PAGE } from '../constants/action-types'

export function setPage(pageType) {
	return { type: SET_PAGE, pageType}
}