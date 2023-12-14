import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  myref = React.createRef()
  render() {
    return (
      <div>
        <input type="text" ref={this.myref} />

        {/* 箭头函数的this指向和上层保持一致 */}
        <button onClick={() => this.click3()}>add3</button>

        <button
          onClick={() => {
            console.log(4, this.a)
          }}
        >
          add4
        </button>
      </div>
    )
  }

  click3 = () => {
    console.log(this.myref)
  }
}
