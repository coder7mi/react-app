function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data1')
    }, 1000)
  })
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data2')
    }, 1000)
  })
}

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data3')
    }, 1000)
  })
}

function* gen() {
  const f1 = yield getData1()
  console.log(f1)

  const f2 = yield getData2(f1)
  console.log(f2)

  const f3 = yield getData3(f2)
  console.log(f3)
}

function run(fn) {
  const g = fn()

  function next(data) {
    const result = g.next(data)
    if (result.done) return result.value
    result.value.then((res) => next(res))
  }

  next()
}

run(gen)
