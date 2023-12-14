import React, { Component } from 'react'

export default class App extends Component {
  inputRef = React.createRef()

  login = () => {
    console.log(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
