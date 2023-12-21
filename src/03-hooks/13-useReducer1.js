import React, { useReducer } from 'react'

const reducer = (preState, action) => {
  console.log(preState)
  console.log(action)

  let newState = { ...preState }
  switch (action.type) {
    case 'minus':
      newState.count--
      return newState

    case 'plus':
      newState.count++
      return newState

    default:
      return preState
  }
}

const initialState = {
  count: 0
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'minus' })
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: 'plus' })
        }}
      >
        +
      </button>
    </div>
  )
}
