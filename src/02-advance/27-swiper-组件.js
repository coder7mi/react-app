import React, { Component } from 'react'
import KSwiper from './swiper/Swiper'
import SwiperItem from './swiper/SwiperItem'

export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        list: ['111', '222', '333']
      })
    })
  }

  render() {
    return (
      <div>
        <KSwiper loop={true}>
          {this.state.list.map((item, index) => {
            return <SwiperItem key={index}>{item}</SwiperItem>
          })}
        </KSwiper>
      </div>
    )
  }
}
