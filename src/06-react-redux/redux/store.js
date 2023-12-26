import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

/* -------------------------------- redux持久化 -------------------------------- */
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'currentCity',
  storage,
  whitelist: ['CityReducer']
}

const reducer = combineReducers({
  TabbarReducer,
  CityReducer,
  CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

// react开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
)

let persistor = persistStore(store)

export { store, persistor }

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
