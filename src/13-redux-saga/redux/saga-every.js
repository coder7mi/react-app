import { all, takeEvery } from 'redux-saga/effects'
import { getList1 } from './saga/saga1'
import { getList2 } from './saga/saga2'

function* watchSaga() {
  yield takeEvery('get_list1', getList1)
  yield takeEvery('get_list2', getList2)
}

export default watchSaga
