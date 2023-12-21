import React, { Component, useEffect } from 'react'

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

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log('resize')
    }

    const timer = setInterval(() => {
      console.log('111')
    }, 1000)

    return () => {
      // 无依赖：组件销毁时执行
      // 有依赖：组件更新和销毁时执行
      console.log('组件销毁')
      window.onresize = null
      clearInterval(timer)
    }
  }, [])

  return <div>child</div>
}
