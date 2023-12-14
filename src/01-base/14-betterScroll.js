import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>点击</button>
        <div
          className="wrap"
          style={{ height: '200px', backgroundColor: 'aliceblue', overflow: 'hidden' }}
        >
          <ul>
            {this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }

  getData = () => {
    const list = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5]

    //同步
    this.setState(
      {
        list
      },
      () => {
        new BScroll('.wrap')
      }
    )
  }
}
