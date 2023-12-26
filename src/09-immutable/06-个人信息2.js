import React, { Component } from 'react'
import { fromJS } from 'immutable'

export default class App extends Component {
  state = {
    info: fromJS({
      name: 'tom',
      location: {
        province: '江苏',
        city: '南京'
      },
      favor: ['读书', '看报', '写代码']
    })
  }

  componentDidMount = () => {
    console.log(this.state.info)
  }

  render() {
    return (
      <div>
        <h1>个人信息</h1>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info.setIn(['name'], 'jack').setIn(['location', 'city'], '苏州')
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
                      info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
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
