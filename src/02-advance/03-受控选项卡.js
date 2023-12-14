import React, { Component } from 'react'
import './css/index.css'
import Film from './myComponent/Film'
import Cinema from './myComponent/Cinema'
import Center from './myComponent/Center'
import Tabbar from './myComponent/Tabbar'
import Navbar from './myComponent/Navbar'

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

  handleTab = (index) => {
    this.setState({
      index
    })
  }

  handelMine = () => {
    this.setState({
      index: 2
    })
  }

  render() {
    return (
      <div>
        <Navbar myEvent={this.handelMine}></Navbar>
        {this.state.compObj[this.state.index]}
        <Tabbar myEvent={this.handleTab} index={this.state.index} list={this.state.list}></Tabbar>
      </div>
    )
  }
}
