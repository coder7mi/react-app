import React, { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail(props) {
  console.log(props)
  // console.log(props.match.params.id)
  console.log(props.location.query.id)

  useEffect(() => {
    // store.show = false
    store.changeHide()

    return () => {
      // store.show = true
      store.changeShow()
    }
  }, [])

  return <div>detail</div>
}
