import React, { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  useEffect(() => {
    axios.get('text.json').then((res) => {
      console.log(res.data.data)
    })
  }, []) //第一次执行一次
  return <div></div>
}
