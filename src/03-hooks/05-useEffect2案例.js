import React, { Component, useEffect, useState } from 'react'

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.setState({ type: 1 })}>正在热映</li>
          <li onClick={() => this.setState({ type: 2 })}>即将上映</li>
        </ul>

        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

const FilmList = (props) => {
  const [text, setText] = useState('')

  useEffect(() => {
    if (props.type === 1) {
      setText('热映电影')
    } else {
      setText('上映电影')
    }
  }, [props.type])

  return <div>{text}</div>
}
