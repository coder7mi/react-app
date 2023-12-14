import React, { Component } from 'react'

class Navbar extends Component {
  handleClick = () => {
    this.props.event()
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>click</button>
      </>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '200px', height: '300px', background: 'red' }}></div>
      </div>
    )
  }
}

// 传递回调函数callback
export default class App extends Component {
  state = {
    isShow: false
  }

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
    console.log('a')
  }

  render() {
    return (
      <div>
        <Navbar event={this.handleShow}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}
