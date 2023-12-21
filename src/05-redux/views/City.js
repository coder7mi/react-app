import React, { useState } from 'react'
import store from '../redux/store'

export default function City(props) {
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
                store.dispatch({
                  type: 'changeCity',
                  payload: item
                })
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
