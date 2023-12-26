import React from 'react'

export default function Login(props) {
  return (
    <div>
      <h1>登录页面</h1>
      <button
        onClick={() => {
          localStorage.setItem('token', '123456')
          props.history.push('/center')
        }}
      >
        登录
      </button>
    </div>
  )
}
