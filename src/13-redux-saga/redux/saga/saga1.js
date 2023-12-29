import { take, fork, call, put, takeEvery } from 'redux-saga/effects'

function* watchSaga1() {
  //写法一
  // while (true) {
  //   // take 监听组件发来的action
  //   yield take('get_list1')
  //   // fork 非阻塞式执行异步处理函数
  //   yield fork(getList1)
  // }

  // 写法二
  yield takeEvery('get_list1', getList1)
}

function* getList1() {
  // 异步处理逻辑

  // call 函数发异步请求
  const res = yield call(getListAction1) //阻塞的调用fn

  // put 函数发出新的action，非阻塞式执行
  yield put({
    type: 'change_list1',
    payload: res
  })
}

function getListAction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([111, 222, 333])
    }, 2000)
  })
}

export default watchSaga1
export { getList1 }
