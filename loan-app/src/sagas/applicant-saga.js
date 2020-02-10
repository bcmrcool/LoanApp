import { takeEvery, call, put } from "redux-saga/effects";

export default function* listenerSaga() {
	yield takeEvery("SEND_APPLICANT_DATA", workerSaga)
}

function* getApplicantApproval(applicantData){
	const response = yield fetch('/api/sendApplicantData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData)
    }); 
	const approvalResponse = yield response.json()

	return approvalResponse
}

function* workerSaga({ applicantData }) {
	try {
		const payload = yield call(getApplicantApproval, applicantData)
		debugger
		if (payload.result === "success"){
			window.location = 'approved'
		} else if (payload.error === "badRequest"){
			yield put({ type: "SET_PAGE_LEVEL_ERROR_MESSAGE", message:payload.message })
		} else {
			window.location = 'denied'
		}

	} catch (e) {
		yield put({ type: "FETCH_FAILED", e })
	}
}

