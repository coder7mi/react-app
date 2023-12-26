import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// 观察普通数据类型
const num = observable.box(0)
const str = observable.box('a')
num.set(1)
str.set('b')

// 第一次执行，之后每次改变也会执行
// 只能是同步，异步需要处理
autorun(() => {
  console.log(num.get())
})

// 观察对象，通过map
const obj1 = observable.map({ key: 'value' })
obj1.set('key', 'value1')
obj1.get('key')

// 观察对象，不通过map
const obj2 = observable({ key: 'value' })
obj2.key = 'value1'
console.log(obj2.key)

// 观察数组
const list = observable([1, 2, 3])
list[2] = 4
export default class App extends Component {
  render() {
    return <div></div>
  }
}
