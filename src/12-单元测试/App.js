import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: ['111', '222', '333'],
    text: ''
  }
  render() {
    return (
      <div>
        <h1>todo</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({
              text: event.target.value
            })
          }}
        />
        <button
          onClick={() => {
            this.setState({
              list: [...this.state.list, this.state.text]
            })
          }}
        >
          add
        </button>

        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={(index) => {
                    const newList = [...this.state.list]
                    newList.splice(index, 1)
                    this.setState({
                      list: newList
                    })
                  }}
                >
                  del
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
