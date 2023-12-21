import React, { useEffect, useState } from 'react'

export default function App() {
  const [name, setName] = useState('cate')

  useEffect(() => {
    setName(name.toUpperCase())
  }, [name]) //第一次执行一次，之后name（依赖）更新也会执行

  return (
    <div>
      {name}
      <button
        onClick={() => {
          setName('mike')
        }}
      >
        click
      </button>
    </div>
  )
}
