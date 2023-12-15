import React, { Component } from 'react'

class Navbar extends Component {
  handleClick = () => {
    this.props.event()
  }
  render() {
    return <>{this.props.children}</>
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

class Swiper extends Component {
  render() {
    return <div>{this.props.children[1]}</div>
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
        <Navbar>
          <button onClick={this.handleShow}>click</button>
        </Navbar>

        <Swiper>
          <div>111</div>
          <div>222</div>
        </Swiper>

        <Swiper>
          <img src="" alt="pic" />
          <div>222</div>
        </Swiper>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}

/**
 * 1.为了复用
 * 2.一定程度减少父子通信
 */
