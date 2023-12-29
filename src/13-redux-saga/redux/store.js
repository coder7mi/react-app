import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga'

const SagaMiddleWare = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(SagaMiddleWare))

SagaMiddleWare.run(watchSaga)
export default store
