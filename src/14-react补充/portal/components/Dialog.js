import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          right: 0,
          background: 'rgba(0,0,0,0.7)'
        }}
      >
        Dialog
      </div>
    )
  }
}
