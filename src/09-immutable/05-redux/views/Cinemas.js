import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getList from '../redux/actionCreator/CinemaList'

export default function Cinemas(props) {
  const [city, setCity] = useState(store.getState().CityReducer.city)
  const [list, setList] = useState(store.getState().CinemaListReducer.list)

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      store.dispatch(getList())
    } else {
      console.log('缓存')
    }
    const unsubscribe = store.subscribe(() => {
      setList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消订阅
      unsubscribe()
    }
  }, [])
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p
          onClick={() => {
            props.history.push('/city')
          }}
        >
          {city}
        </p>

        <p
          onClick={() => {
            props.history.push('/cinemas/search')
          }}
        >
          搜索
        </p>
      </div>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
