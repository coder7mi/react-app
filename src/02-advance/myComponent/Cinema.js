import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor() {
    super()

    this.state = {
      cinemaList: [],
      copyList: []
    }

    //异步
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      this.setState({
        cinemaList: res.data.data.cinemas,
        copyList: res.data.data.cinemas
      })
      new BScroll('.box')
    })
  }
  handleInput = (event) => {
    const newList = this.state.copyList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    )

    this.setState({
      cinemaList: newList
    })
  }

  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput} />
        <div
          className="box"
          style={{ height: '500px', backgroundColor: 'aliceblue', overflow: 'hidden' }}
        >
          <div>
            {this.state.cinemaList.map((item) => (
              <div className="list-wrap" key={item.cinemaId}>
                <div className="list-title">{item.name}</div>
                <div className="list-address">{item.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
