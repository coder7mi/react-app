import React, { useEffect } from 'react'

export default function Detail(props) {
  console.log(props)
  // console.log(props.match.params.id)
  console.log(props.location.query.id)

  useEffect(() => {
    return () => {
      console.log('detail组件卸载了')
    }
  }, [])

  return <div>detail</div>
}
