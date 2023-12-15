import React, { Component } from 'react'

class Child extends Component {
  state = {
    name: ''
  }
  componentWillReceiveProps(nextProps) {
    // 最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
    // 把属性转化为子组件自己的状态
    console.log('componentWillReceiveProps')
    this.setState({
      name: nextProps.name
    })
  }
  render() {
    return <div>chid-{this.state.name}</div>
  }
}

export default class App extends Component {
  state = {
    name: 'a'
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({
              name: 'b'
            })
          }}
        >
          按钮
        </button>
        <Child name={this.state.name}></Child>
      </div>
    )
  }

  // scu 性能优化函数
  shouldComponentUpdate(nextProps, nextState) {
    // return true //应该更新
    // return false //阻止更新
    // this.state 老的状态
    // nextState 新的状态
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true
    }
    return false
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate(preProps, preState) {
    console.log('did update')
    console.log(preState.name)
  }
}
