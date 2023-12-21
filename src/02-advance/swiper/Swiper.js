import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css'

export default class KSwiper extends Component {
  componentDidMount = () => {
    new Swiper('.swiper', {
      loop: this.props.loop
    })
  }

  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
