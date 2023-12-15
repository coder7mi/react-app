import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'zhangsan'
  }
  componentWillMount() {
    // 初始化数据的作用
    this.setState({
      name: 'aa'
    })
  }

  componentDidMount() {
    // 数据请求axios
    // 订阅函数调用
    // setInterval
    // 基于创建完的dom进行初始化（例如：BetterScroll）
  }
  render() {
    return <div>{this.state.name}</div>
  }
}
