import React, { Component } from 'react'
import { Map } from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'tom',
      select: 'aa',
      filter: Map({
        text: '',
        up: true,
        down: false
      })
    })
  }

  componentDidMount = () => {}

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info.set('name', 'jerry')
            })
          }}
        >
          click
        </button>
        <span>{this.state.info.get('name')}</span>

        <Child filter={this.state.info.get('filter')}></Child>
      </div>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.filter === nextProps.filter) {
      return false
    }
    return true
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('更新')
  }

  render() {
    return <div>child</div>
  }
}
