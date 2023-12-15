import React, { Component } from 'react'

export default class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              show: !this.state.show
            })
          }
        >
          click
        </button>
        {this.state.show ? <Child /> : null}
      </div>
    )
  }
}

class Child extends Component {
  componentDidMount() {
    window.onresize = () => {
      console.log('resize')
    }

    this.timer = setInterval(() => {
      console.log('111')
    }, 1000)
  }

  componentWillUnmount() {
    console.log('unmounted')
    window.onresize = null
    clearInterval(this.timer)
  }
  render() {
    return <div>child</div>
  }
}
