import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  myRef = React.createRef()

  getSnapshotBeforeUpdate() {
    // 获取容器高度
    console.log(this.myRef.current.scrollHeight)
    return this.myRef.current.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.myRef.current.scrollHeight)

    // 新容器高度-原容器高度 = 增加的容器高度
    // 增加的容器高度+原滚去的距离 = 新滚去的距离
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - snapshot
  }
  render() {
    return (
      <div>
        <h1>邮箱应用</h1>
        <button
          onClick={() => {
            this.setState({
              list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20], ...this.state.list]
            })
          }}
        >
          来邮件
        </button>
        <div style={{ height: '200px', overflow: 'auto' }} ref={this.myRef}>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index} style={{ height: '100px', background: 'orange' }}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
