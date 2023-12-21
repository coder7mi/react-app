import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css'

export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        list: ['111', '222', '333', '444', '555']
      })

      // new Swiper('.swiper')
    }, 1000)
  }

  componentDidUpdate = (prevProps, prevState) => {
    new Swiper('.swiper')
  }

  render() {
    return (
      <div>
        <div className="swiper" style={{ height: '200px', background: 'green' }}>
          <div className="swiper-wrapper">
            {this.state.list.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
