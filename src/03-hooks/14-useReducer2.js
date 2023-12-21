import React, { useReducer, useContext } from 'react'

const reducer = (preState, action) => {
  console.log(preState, action)
  const newState = { ...preState }

  switch (action.flag) {
    case 'changeA':
      newState.a = action.val
      return newState

    case 'changeB':
      newState.b = action.val
      return newState

    default:
      return preState
  }
}

const initailState = {
  a: 1,
  b: 2
}

const GlobalContext = React.createContext()

export default function App() {
  const [state, dispatch] = useReducer(reducer, initailState)
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            flag: 'changeA',
            val: '111'
          })
        }}
      >
        改变a
      </button>
      <button
        onClick={() => {
          dispatch({
            flag: 'changeB',
            val: '222'
          })
        }}
      >
        改变b
      </button>
    </div>
  )
}

function Child2() {
  const { state } = useContext(GlobalContext)
  return <div>child2-{state.a}</div>
}

function Child3() {
  const { state } = useContext(GlobalContext)

  return <div>child3-{state.b}</div>
}
