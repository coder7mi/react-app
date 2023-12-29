import React, { Component } from 'react'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (store.getState().list1.length === 0) {
              store.dispatch({ type: 'get_list1' })
            } else {
              console.log('缓存1')
            }
          }}
        >
          click1
        </button>

        <button
          onClick={() => {
            if (store.getState().list2.length === 0) {
              store.dispatch({ type: 'get_list2' })
            } else {
              console.log('缓存2')
            }
          }}
        >
          click2
        </button>
      </div>
    )
  }
}
