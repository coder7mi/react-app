import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom'

function Center(props) {
  console.log(props)
  return <div>center</div>
}

export default withRouter(Center)
