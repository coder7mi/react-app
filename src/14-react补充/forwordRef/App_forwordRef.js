import React, { Component, forwardRef } from 'react'

export default class App extends Component {
  inputRef = React.createRef()

  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.inputRef)
            this.inputRef.current.value = ''
            this.inputRef.current.focus()
          }}
        >
          获取焦点
        </button>
        <Child ref={this.inputRef} />
      </div>
    )
  }
}

const Child = forwardRef((props, ref) => {
  return <input type="text" defaultValue="111" ref={ref} />
})
