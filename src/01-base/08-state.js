import React, { Component } from 'react'

export default class App extends Component {
  state = {
    show: true
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>{this.state.show ? '💚' : '🧡'}</button>
      </div>
    )
  }
}
