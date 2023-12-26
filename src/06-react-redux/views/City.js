import React, { useState } from 'react'
import { connect } from 'react-redux'

function City(props) {
  const [list] = useState(['北京', '上海', '深圳', '广州'])
  return (
    <div>
      <p>city</p>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                props.city(item)
                props.history.goBack()
              }}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  city(item) {
    return {
      type: 'changeCity',
      payload: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)
