import React, { Component } from 'react'
import './css/index.css'
import Film from './myComponent/Film'
import Cinema from './myComponent/Cinema'
import Center from './myComponent/Center'

export default class App extends Component {
  state = {
    index: 0,
    list: [
      {
        id: '1',
        text: '电影'
      },
      {
        id: '2',
        text: '影院'
      },
      {
        id: '3',
        text: '我的'
      }
    ],
    compObj: {
      0: <Film></Film>,
      1: <Cinema></Cinema>,
      2: <Center></Center>
    }
  }

  handleClick = (index) => {
    this.setState({
      index
    })
  }

  render() {
    return (
      <div>
        {this.state.compObj[this.state.index]}
        <ul>
          {this.state.list.map((item, index) => (
            <li
              className={this.state.index === index ? 'active' : ''}
              key={item.id}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
