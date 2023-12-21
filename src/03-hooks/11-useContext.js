import React, { Component, useContext, useEffect } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext() // 创建context对象

function FilmItem(props) {
  const { title, director, producer, description } = props

  const value = useContext(GlobalContext)

  return (
    <div
      style={{ marginBottom: '10px', background: '#ccc' }}
      onClick={() => {
        // console.log(description)
        value.changeDesc(description)
      }}
    >
      <h2>{title}</h2>
      <span>{director}</span>
      <p>{producer}</p>
    </div>
  )
}

function FilmDetail() {
  const value = useContext(GlobalContext)

  return (
    <div style={{ width: '500px', height: '400px', background: 'yellow' }}>
      <div>{value.desc}</div>
    </div>
  )
}

export default function App() {
  const [list, setList] = React.useState([])
  const [desc, setDesc] = React.useState('')

  useEffect(() => {
    axios.get('/text.json').then((res) => {
      setList(res.data.data.films)
    })
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        desc: desc,
        changeDesc: (value) => {
          setDesc(value)
        }
      }}
    >
      <div>
        {list.map((item) => (
          <FilmItem key={item.id} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  )
}
