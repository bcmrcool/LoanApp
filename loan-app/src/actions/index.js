import { SET_PAGE, SEND_APPLICANT_DATA, FETCH_SUCCESS, SET_PAGE_LEVEL_ERROR_MESSAGE } from '../constants/action-types'

export function setPage(pageType) {
	return { type: SET_PAGE, pageType}
}

export function sendApplicantData(applicantData) {
	return { type: SEND_APPLICANT_DATA, applicantData}
}

export function setPageLevelErrorMessage(message) {
	return { type: SET_PAGE_LEVEL_ERROR_MESSAGE, message}
}