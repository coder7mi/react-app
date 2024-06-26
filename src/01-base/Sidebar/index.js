import React from 'react'

export default function Sidebar(props) {
  const { bg, position } = props

  const obj = {
    background: bg,
    width: '200px',
    position: 'fixed'
  }

  const obj1 = {
    left: 0
  }

  const obj2 = {
    right: 0
  }

  const styleObj = position === 'left' ? { ...obj, ...obj1 } : { ...obj, ...obj2 }
  return (
    <div>
      <ul style={styleObj}>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  )
}
