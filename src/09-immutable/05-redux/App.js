import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'
import store from './redux/store'

export default class App extends Component {
  state = {
    isShow: store.getState().TabbarReducer.get('show')
  }
  componentDidMount = () => {
    store.subscribe(() => {
      console.log('订阅', store.getState())
      this.setState({
        isShow: store.getState().TabbarReducer.get('show')
      })
    })
  }

  render() {
    return (
      <div>
        <MRouter>{this.state.isShow && <TabBar />}</MRouter>
      </div>
    )
  }
}
