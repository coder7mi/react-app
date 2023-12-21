import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css'

export default class App extends Component {
  state = {
    list: ['111', '222', '333']
  }

  componentDidMount = () => {
    new Swiper('.swiper')
  }

  render() {
    return (
      <div>
        <div className="swiper">
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
