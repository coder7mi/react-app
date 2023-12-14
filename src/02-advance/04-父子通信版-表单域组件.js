import React, { Component } from 'react'

localStorage.setItem('name', 'admin')
localStorage.setItem('password', '123')

class Field extends Component {
  static defaultProps = {
    type: 'text'
  }

  change = (e) => {
    this.props.changeEvt(e.target.value)
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={this.change} value={this.props.value} />
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    name: localStorage.getItem('name'),
    password: localStorage.getItem('password')
  }

  login = () => {
    console.log(this.state.name, this.state.password)
  }

  cancel = () => {
    this.setState({
      name: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        <Field
          label="用户名"
          changeEvt={(val) => {
            this.setState({
              name: val
            })
          }}
          value={this.state.name}
        ></Field>
        <Field
          label="密码"
          type="password"
          changeEvt={(val) => {
            this.setState({
              password: val
            })
          }}
          value={this.state.password}
        ></Field>
        <button onClick={() => this.login()}>登录</button>
        <button onClick={() => this.cancel()}>取消</button>
      </div>
    )
  }
}
