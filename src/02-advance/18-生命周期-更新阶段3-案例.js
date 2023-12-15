import React, { Component } from 'react'

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

class FilmList extends Component {
  componentDidMount() {
    if (this.props.type === 1) {
      console.log('正在热映')
    } else {
      console.log('即将上映')
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.type === 1) {
      console.log('正在热映')
    } else {
      console.log('即将上映')
    }
  }
  render() {
    return <div>FilmList</div>
  }
}
