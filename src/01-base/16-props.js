import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    const obj = {
      title: '我的',
      leftShow: true,
      rightShow: false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar rightShow={false}></Navbar>
        </div>

        <div>
          <h2>列表</h2>
          <Navbar title="列表" rightShow={false}></Navbar>
        </div>

        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" leftShow={false} rightShow={true}></Navbar>
        </div>

        <Navbar {...obj}></Navbar>
      </div>
    )
  }
}
