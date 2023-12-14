import React, { Component } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext() // 创建context对象

class FilmItem extends Component {
  render() {
    const { title, director, producer, description } = this.props

    return (
      <GlobalContext.Consumer>
        {(value) => {
          console.log(value)
          return (
            <div
              style={{ marginBottom: '10px', background: '#ccc' }}
              onClick={() => {
                // console.log(description)
                value.changeDesc(description)
              }}
            >
              <h2>{title}</h2>
              <span>{director}</span>
              <p>{producer}</p>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => (
          <div style={{ width: '500px', height: '400px', background: 'yellow' }}>
            <div>{value.desc}</div>
          </div>
        )}
      </GlobalContext.Consumer>
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
      <GlobalContext.Provider
        value={{
          desc: this.state.desc,
          changeDesc: (value) => {
            this.setState({
              desc: value
            })
          }
        }}
      >
        <div>
          {this.state.list.map((item) => (
            <FilmItem key={item.id} {...item}></FilmItem>
          ))}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}
