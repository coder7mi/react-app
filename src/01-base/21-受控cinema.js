import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      cinemaList: [],
      text: ''
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
        cinemaList: res.data.data.cinemas
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  getCinemaList = () => {
    return this.state.cinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.text.toUpperCase())
    )
  }

  render() {
    return (
      <div>
        <input type="text" value={this.text} onChange={this.handleChange} />
        <div>
          <div>
            {this.getCinemaList().map((item) => (
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
