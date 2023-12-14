import React, { Component } from 'react'

export default class App extends Component {
  state = {
    userName: 'user'
  }

  login = () => {}
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userName}
          onChange={(e) => {
            this.setState({
              userName: e.target.value
            })
          }}
        />
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
