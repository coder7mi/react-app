import React, { useEffect } from 'react'
import store from '../redux/store'
import { hide, show } from '../redux/actionCreator/Tabbar'

export default function Detail(props) {
  console.log(props)
  // console.log(props.match.params.id)
  console.log(props.location.query.id)

  useEffect(() => {
    store.dispatch(hide())
    return () => {
      console.log('detail组件卸载了')
      store.dispatch(show())
    }
  }, [])

  return <div>detail</div>
}
