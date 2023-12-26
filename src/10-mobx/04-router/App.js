import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'
import { autorun } from 'mobx'
import store from './mobx/store'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div>
        <MRouter>{this.props.store.show && <TabBar />}</MRouter>
      </div>
    )
  }
}

export default App
