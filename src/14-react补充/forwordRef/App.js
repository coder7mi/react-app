import React, { Component } from 'react'

export default class App extends Component {
  input = null
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.input.current.focus()
            this.input.current.value = ''
          }}
        >
          获取焦点
        </button>
        <Child
          cb={(el) => {
            console.log(el)
            this.input = el
          }}
        />
      </div>
    )
  }
}

class Child extends Component {
  inputRef = React.createRef()

  componentDidMount = () => {
    this.props.cb(this.inputRef)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} defaultValue="111" />
      </div>
    )
  }
}
