import React, { Component } from 'react'

export default class App extends Component {
  inputRef = React.createRef()

  state = {
    list: [
      {
        id: 1,
        text: 'a'
      },
      {
        id: 2,
        text: 'a'
      },
      {
        id: 3,
        text: 'a'
      }
    ]
  }

  handleClick = () => {
    //不要直接修改状态，会造成不可预期的问题
    // this.state.list.push(...)

    const newList = [...this.state.list]
    // const newList = this.state.list.slice()

    newList.push({
      id: newList.length + 1,
      text: this.inputRef.current.value
    })

    this.setState({
      list: newList
    })
    this.inputRef.current.value = ''
  }

  handleDel = (index) => {
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {/* {item.text} */}

              {/* 富文本展示 */}
              <span
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
              ></span>
              <button onClick={() => this.handleDel(index)}>delete</button>
            </li>
          ))}
        </ul>
        {/* {this.state.list.length === 0 ? <div>暂无数据</div> : null} */}

        {/* {this.state.list.length === 0 && <div>暂无数据</div>} */}
      </div>
    )
  }
}
