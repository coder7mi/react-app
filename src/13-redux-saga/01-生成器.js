function* test() {
  console.log('start')
  const input1 = yield '输出1'
  console.log('1111', input1)
  yield '输出2'
  console.log('2222')
  yield '输出3'
  console.log('3333')
  yield '输出4'
}

const mytest = test()
const res1 = mytest.next()
console.log(res1)
const res2 = mytest.next('aaa')
mytest.next()
mytest.next()
