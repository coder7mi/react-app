/**
 * 1. npm i immutable
 * 2. import {Map} from 'immutable'
 */

import { Map } from 'immutable'

import React, { Component } from 'react'

const obj = {
  name: 'tom',
  age: 12
}

const oldObj = Map(obj)
const newObj = oldObj.set('name', 'jerry')

// 1.get 获取immutable
console.log(oldObj.get('name'))
console.log(newObj.get('name'))

// 2.immutable ===> 普通对象
console.log(oldObj.toJS())
console.log(newObj.toJS())

// export default class App extends Component {
//   state = {
//     info: Map({
//       name: 'tom',
//       age: 12
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({
//               info: this.state.info.set('name', 'jerry').set('age', 13)
//             })
//           }}
//         >
//           click
//         </button>
//         <span>{this.state.info.get('name')}</span>
//         <span>{this.state.info.get('age')}</span>
//       </div>
//     )
//   }
// }

export default class App extends Component {
  state = {
    info: {
      name: 'tom',
      age: 12
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            const old = Map(this.state.info)
            const newInfo = old.set('name', 'jerry').set('age', 13)
            this.setState({
              info: newInfo.toJS()
            })
          }}
        >
          click
        </button>
        <span>{this.state.info.name}</span>
        <span>{this.state.info.age}</span>
      </div>
    )
  }
}
