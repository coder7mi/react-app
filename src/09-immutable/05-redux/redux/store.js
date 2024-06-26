import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
  TabbarReducer,
  CityReducer,
  CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

export default store

/* ------------------ 原理 ------------------ */
function createAStore(reducer) {
  var list = []
  var state = reducer(undefined, {})
  function subscribe(callback) {
    list.push(callback)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (var i in list) {
      list[i] && list[i]()
    }
  }

  function getState() {
    return state
  }
  return { subscribe, dispatch, getState }
}
