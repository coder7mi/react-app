import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <MRouter>
          <TabBar />
        </MRouter>
      </div>
    )
  }
}
