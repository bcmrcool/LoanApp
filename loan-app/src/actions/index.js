import { SET_PAGE, SEND_APPLICANT_DATA } from '../constants/action-types'

export function setPage(pageType) {
	return { type: SET_PAGE, pageType}
}

export function sendApplicantData(applicantData) {
	return { type: SEND_APPLICANT_DATA, applicantData}
}