import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getList from '../redux/actionCreator/CinemaList'

export default function Cinemas(props) {
  const [city, setCity] = useState(store.getState().CityReducer.city)
  const [list, setList] = useState(store.getState().CinemaListReducer.list)

  useEffect(() => {
    if (store.getState().CinemaListReducer.list === 0) {
      store.dispatch(getList())
    } else {
      console.log(1)
    }
    store.subscribe(() => {
      setList(store.getState().CinemaListReducer.list)
    })
  }, [])
  return (
    <div>
      <p
        onClick={() => {
          props.history.push('/city')
        }}
      >
        {city}
      </p>
      <span>Cinemas</span>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
