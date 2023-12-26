import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function NowPlaying(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/text.json').then((res) => {
      console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])

  // const history = useHistory()

  const handleJump = (id) => {
    /* 1.动态路由传参 */
    /* history.push(`/detail/${id}`)
    props.history.push(`/detail/${id}`) */

    /* 2.query 传参 */
    props.history.push({
      pathname: '/detail',
      query: {
        id
      }
    })

    /* 3.state 传参 */
    // props.history.push({
    //   pathname: '/detail',
    //   state: {
    //     id
    //   }
    // })
  }
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id} onClick={() => handleJump(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
