import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/Tabbar'
import { connect } from 'react-redux'

function Detail(props) {
  console.log(props)
  const { hide, show, location } = props

  useEffect(() => {
    hide()
    return () => {
      show()
    }
  }, [location.query.id, show, hide])

  return <div>detail</div>
}

// connect(将来给子传的属性，将来给子传的回调函数)

const mapDispatchToProps = {
  hide,
  show
}
export default connect(null, mapDispatchToProps)(Detail)
