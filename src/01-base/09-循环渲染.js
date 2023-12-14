import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: 'a'
      },
      {
        id: 2,
        text: 'a'
      },
      {
        id: 3,
        text: 'a'
      }
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}
