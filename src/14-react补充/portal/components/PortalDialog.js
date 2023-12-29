import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  render() {
    return createPortal(
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
        <button onClick={this.props.onClose}>关闭</button>
      </div>,
      document.body // 这里指定挂载的节点
    )
  }
}
