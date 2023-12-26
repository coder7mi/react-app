import React, { Component } from 'react'
import { List, Map } from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'tom',
      location: Map({
        province: '江苏',
        city: '南京'
      }),
      favor: List(['读书', '看报', '写代码'])
    })
  }
  render() {
    return (
      <div>
        <h1>个人信息</h1>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info
                .set('name', 'jack')
                .set('location', this.state.info.get('location').set('city', '苏州'))
            })
          }}
        >
          修改
        </button>
        <p>{this.state.info.get('name')}</p>
        <div>
          {this.state.info.get('location').get('province')}-
          {this.state.info.get('location').get('city')}
        </div>

        <div>
          {this.state.info.get('favor').map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={(index) => {
                    this.setState({
                      info: this.state.info.set(
                        'favor',
                        this.state.info.get('favor').splice(index, 1)
                      )
                    })
                  }}
                >
                  del
                </button>
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}
