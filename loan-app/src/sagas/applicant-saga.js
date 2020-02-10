import { takeEvery, call, put } from "redux-saga/effects";

export default function* listenerSaga() {
	yield takeEvery("SEND_APPLICANT_DATA", workerSaga)
}

const getApplicantApproval = async (applicantData) => {
	const response = await fetch('/api/sendApplicantData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData)
    }); 
	const approvalResponse = await response.json()

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

