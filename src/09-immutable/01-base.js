import React from 'react'

export default function App() {
  return <div></div>
}

var obj = {
  name: 'bob',
  arr: [1, 2, 3],
  age: undefined
}

var obj1 = { ...obj } //比引用复制多复制一层(不能复制复杂数据类型)
var obj2 = JSON.parse(JSON.stringify(obj)) //值不能有undefined

// 递归深复制 性能不好，占用内存
