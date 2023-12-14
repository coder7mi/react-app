import React, { Component } from 'react'

const Navbar = () => (
  <div>
    Navbar
    <Child></Child>
  </div>
)
const Swiper = () => <div>Swiper</div>

const Child = () => <div>Child</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
      </div>
    )
  }
}
