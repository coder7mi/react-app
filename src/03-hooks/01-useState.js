import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState('marie')
  return (
    <div>
      {name}
      <button
        onClick={() => {
          setName('jordan')
        }}
      >
        click
      </button>
    </div>
  )
}
