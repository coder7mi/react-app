import React, { Component } from 'react'

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.setState({ type: 1 })}>正在热映</li>
          <li onClick={() => this.setState({ type: 2 })}>即将上映</li>
        </ul>

        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component {
  state = {
    list: [],
    type: 1
  }
  componentDidMount() {
    if (this.props.type === 1) {
      console.log('正在热映')
      this.setState({
        list: [1, 2, 3, 4, 5]
      })
    } else {
      console.log('即将上映')
      this.setState({
        list: [6, 7, 8, 9, 10]
      })
    }
  }

  // 将新值作为组件自身的状态使用，配合componentDidUpdate使用
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps)
    return {
      type: nextProps.type
    }
  }

  componentDidUpdate(preProps, preState) {
    // 更新后状态和旧状态一致时，不继续更新，否则调用setState会死循环
    if (this.state.type === preState.type) {
      return
    }

    if (this.state.type === 1) {
      console.log('正在热映')
      this.setState({
        list: [1, 2, 3, 4, 5]
      })
    } else {
      console.log('即将上映')
      this.setState({
        list: [6, 7, 8, 9, 10]
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
    )
  }
}
