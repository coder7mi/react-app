import React, { useEffect, useMemo, useState } from 'react'
import store from '../redux/store'
import getList from '../redux/actionCreator/CinemaList'

export default function Search() {
  const [list, setList] = useState(store.getState().CinemaListReducer.list)

  const [myText, setMyText] = useState('')

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

  const filterList = useMemo(
    () => list.filter((item) => item.name.toUpperCase().includes(myText.toUpperCase())),
    [list, myText]
  )
  return (
    <div>
      <input type="text" value={myText} onChange={(e) => setMyText(e.target.value)} />
      <ul>
        {filterList.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
