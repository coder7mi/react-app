import { take, fork, call, put } from 'redux-saga/effects'

function* watchSaga2() {
  while (true) {
    // take 监听组件发来的action
    yield take('get_list2')
    // fork 非阻塞式执行异步处理函数
    yield fork(getList2)
  }
}

function* getList2() {
  // 异步处理逻辑

  // call 函数发异步请求
  const res1 = yield call(getListAction2_1) //阻塞的调用fn
  const res2 = yield call(getListAction2_2(res1))

  // put 函数发出新的action，非阻塞式执行
  yield put({
    type: 'change_list2',
    payload: res2
  })
}

function getListAction2_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([444, 555, 666])
    }, 2000)
  })
}

function getListAction2_2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, 777])
    }, 2000)
  })
}

export default watchSaga2
export { getList2 }
