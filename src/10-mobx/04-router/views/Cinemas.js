import React, { useEffect, useState } from 'react'
import store from '../mobx/store'
import { autorun } from 'mobx'
import { Observer } from 'mobx-react'

export default function Cinemas() {
  useEffect(() => {
    if (store.list.length === 0) {
      store.getList()
    }
    return () => {}
  }, [])

  return (
    <div>
      <Observer>
        {() => {
          return store.list.map((item) => <p key={item.cinemaId}>{item.name}</p>)
        }}
      </Observer>
    </div>
  )
}
