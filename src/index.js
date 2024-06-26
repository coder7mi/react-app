import React from 'react'
import ReactDOM from 'react-dom'
import App from './14-react补充/forwordRef/App_forwordRef'
import { Provider } from 'mobx-react'
import store from './10-mobx/04-router/mobx/store'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,

  document.getElementById('root')
)
