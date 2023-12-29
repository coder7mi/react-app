import React, { Component } from 'react'
import './css/app.css'
// import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'
export default class App extends Component {
  state = {
    show: false
  }

  render() {
    return (
      <div className="wrap">
        <div className="left"></div>
        <div className="right">
          <button
            onClick={() => {
              this.setState({ show: true })
            }}
          >
            打开
          </button>
          {this.state.show && (
            <PortalDialog
              onClose={() => {
                this.setState({ show: false })
              }}
            ></PortalDialog>
          )}
        </div>
      </div>
    )
  }
}
