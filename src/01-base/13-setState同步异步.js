import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 1
  }

  //多次调用setState不会引发多次虚拟dom的对比
  handleClick1 = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) //1

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) //1

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) //1
  }

  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count) //3

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count) //4

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count) //5
    }, 0)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick1()}>add1</button>
        <button onClick={() => this.handleClick2()}>add2</button>
      </div>
    )
  }
}
