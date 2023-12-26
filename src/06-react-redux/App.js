import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <MRouter>{this.props.isShow && <TabBar />}</MRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)
