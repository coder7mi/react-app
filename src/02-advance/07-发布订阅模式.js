import React, { Component } from 'react'
import axios from 'axios'

/* ------------- 调度中心 ------------- */
var bus = {
  list: [],

  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },

  // 发布
  publish(text) {
    this.list.forEach((callback) => {
      callback && callback(text)
    })
  }
}

// bus.subscribe((value) => {
//   console.log(value)
// })

// bus.publish('111')

/* ------------------------------------------------------------------------ */

class FilmItem extends Component {
  render() {
    const { title, director, producer, description } = this.props

    return (
      <div
        style={{ marginBottom: '10px', background: '#ccc' }}
        onClick={() => {
          // console.log(description)
          bus.publish(description)
        }}
      >
        <h2>{title}</h2>
        <span>{director}</span>
        <p>{producer}</p>
      </div>
    )
  }
}

class FilmDetail extends Component {
  constructor() {
    super()

    this.state = {
      desc: ''
    }

    bus.subscribe((value) => {
      console.log(value)
      this.setState({ desc: value })
    })
  }

  render() {
    return (
      <div style={{ width: '500px', height: '400px', background: 'yellow' }}>
        <div>{this.state.desc}</div>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    axios.get('/text.json').then((res) => {
      console.log(res.data.data)
      this.setState({
        list: res.data.data.films
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <FilmItem key={item.id} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}
