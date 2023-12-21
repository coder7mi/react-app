import React, { useCallback, useState } from 'react'

export default function App() {
  const [text, setText] = useState('')

  const change = useCallback((e) => {
    setText(e.target.value)
  }, [])

  const [list, setList] = useState(['a', 'b', 'c'])

  const add = useCallback(() => {
    setList([...list, text])
    setText('')
  }, [text, list])

  const del = useCallback(
    (index) => {
      const newList = [...list]
      newList.splice(index, 1)
      setList(newList)
    },
    [list]
  )

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={change} />
        <button onClick={add}>add</button>
      </div>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => del(index)}>del</button>
            </li>
          )
        })}
      </ul>

      {!list.length && <div>暂无数据</div>}
    </div>
  )
}
