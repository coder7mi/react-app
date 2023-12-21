import React, { useRef } from 'react'

export default function App() {
  const myInput = useRef(null)

  //保存临时变量
  const num = useRef(0)

  const change = () => {
    console.log('myInput.current.value: ', myInput.current.value)
  }
  return (
    <div>
      <input type="text" ref={myInput} onChange={change} />

      <button
        onClick={() => {
          num.current++
          console.log(num.current)
        }}
      >
        add
      </button>
      {num.current}
    </div>
  )
}
