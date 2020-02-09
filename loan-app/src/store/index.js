import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas/applicant-saga'
import rootReducer from '../reducers/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( 
	rootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(apiSaga)

export default store