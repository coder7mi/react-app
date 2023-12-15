import React, { Component } from 'react'

class Box extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.index === this.props.current || nextProps.index === nextProps.current) {
      return true
    }
    return false
  }

  render() {
    console.log('render')
    return (
      <div
        style={{
          width: '100px',
          height: '100px',
          marginRight: '10px',
          border: this.props.index === this.props.current ? '2px solid red' : '1px solid black'
        }}
      ></div>
    )
  }
}

export default class App extends Component {
  state = {
    list: ['00', '01', '02', '03', '04', '05', '06'],
    current: 0
  }
  render() {
    return (
      <>
        <input
          type="number"
          onChange={(event) => {
            this.setState({
              current: parseInt(event.target.value)
            })
          }}
        />

        <div style={{ display: 'flex', marginTop: '20px' }}>
          {this.state.list.map((item, index) => {
            return <Box key={item} index={index} current={this.state.current}></Box>
          })}
        </div>
      </>
    )
  }
}
