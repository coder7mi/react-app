import React, { Component } from 'react'
import { List } from 'immutable'

const arr = List([1, 2, 3])

// 方法与原生数组方式一致，并且不会修改原数组
const arr1 = arr.push(4)
const arr2 = arr.concat([5, 6, 7])
console.log(arr.toJS(), arr1, arr2)

export default class App extends Component {
  state = {
    favor: List(['a', 'b', 'c'])
  }
  render() {
    return (
      <div>
        {this.state.favor.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    )
  }
}
