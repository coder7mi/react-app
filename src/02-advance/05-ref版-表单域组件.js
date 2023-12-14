import React, { Component } from 'react'

localStorage.setItem('name', 'admin')
localStorage.setItem('password', '123')

class Field extends Component {
  static defaultProps = {
    type: 'text'
  }

  state = {
    value:
      this.props.label === '用户名'
        ? localStorage.getItem('name')
        : localStorage.getItem('password')
  }

  change = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  clear = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={this.change} value={this.state.value} />
      </div>
    )
  }
}

export default class App extends Component {
  nameRef = React.createRef()
  passwordRef = React.createRef()

  login = () => {
    console.log(this.nameRef)
    console.log(this.nameRef.current.state.value)
    console.log(this.passwordRef.current.state.value)
  }

  cancel = () => {
    this.nameRef.current.clear()
    this.passwordRef.current.clear()
  }
  render() {
    return (
      <div>
        <Field ref={this.nameRef} label="用户名"></Field>
        <Field ref={this.passwordRef} label="密码" type="password"></Field>
        <button onClick={() => this.login()}>登录</button>
        <button onClick={() => this.cancel()}>取消</button>
      </div>
    )
  }
}
