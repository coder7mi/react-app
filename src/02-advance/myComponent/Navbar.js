import React, { Component } from 'react'

export default class Navbar extends Component {
  handleClick = () => {
    this.props.myEvent()
  }

  render() {
    return (
      <div style={{ background: 'orange', display: 'flex', justifyContent: 'space-between' }}>
        <button>返回</button>
        <span>电影</span>
        <button onClick={() => this.handleClick()}>我的</button>
      </div>
    )
  }
}
