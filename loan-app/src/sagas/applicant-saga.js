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
		yield put({ type: "FETCH_SUCCESS", payload })

	} catch (e) {
		yield put({ type: "FETCH_FAILED", e })
	}
}

