import React, { Component } from 'react'
import axios from 'axios'

class FilmItem extends Component {
  render() {
    const { title, director, producer, description } = this.props

    return (
      <div
        style={{ marginBottom: '10px', background: '#ccc' }}
        onClick={() => {
          this.props.onEvent(description)
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
  render() {
    return (
      <div style={{ width: '500px', height: '400px', background: 'yellow' }}>
        <div>{this.props.desc}</div>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      desc: ''
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
          <FilmItem
            key={item.id}
            {...item}
            onEvent={(value) => {
              console.log(value)
              this.setState({ desc: value })
            }}
          ></FilmItem>
        ))}
        <FilmDetail desc={this.state.desc}></FilmDetail>
      </div>
    )
  }
}
