import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [cinemaList, setCinemaList] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      setCinemaList(res.data.data.cinemas)
    })
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(text.toUpperCase()) ||
          item.address.toUpperCase().includes(text.toUpperCase())
      ),
    [cinemaList, text]
  )

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <div>
        <div>
          {getCinemaList.map((item) => (
            <div className="list-wrap" key={item.cinemaId}>
              <div className="list-title">{item.name}</div>
              <div className="list-address">{item.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
