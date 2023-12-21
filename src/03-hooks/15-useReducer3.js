import React, { useReducer, useContext, useEffect } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext() // 创建context对象

const initialState = {
  desc: '',
  list: []
}

const reducer = (preState, action) => {
  let newState = { ...preState }
  switch (action.type) {
    case 'getList':
      newState.list = action.value
      return newState
    case 'changeDesc':
      newState.desc = action.value
      return newState
    default:
      return preState
  }
}

function FilmItem(props) {
  const { title, director, producer, description } = props

  const { dispatch } = useContext(GlobalContext)

  return (
    <div
      style={{ marginBottom: '10px', background: '#ccc' }}
      onClick={() => {
        // console.log(description)

        dispatch({
          type: 'changeDesc',
          value: description
        })
      }}
    >
      <h2>{title}</h2>
      <span>{director}</span>
      <p>{producer}</p>
    </div>
  )
}

function FilmDetail() {
  const { state } = useContext(GlobalContext)

  return (
    <div style={{ width: '500px', height: '400px', background: 'yellow' }}>
      <div>{state.desc}</div>
    </div>
  )
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('/text.json').then((res) => {
      dispatch({
        type: 'getList',
        value: res.data.data.films
      })
    })
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div>
        {state.list.map((item) => (
          <FilmItem key={item.id} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  )
}
