import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: '',
    list: [
      {
        id: 1,
        text: 'a',
        isChecked: false
      },
      {
        id: 2,
        text: 'a',
        isChecked: true
      },
      {
        id: 3,
        text: 'a',
        isChecked: false
      }
    ]
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  checkChange = (index) => {
    const newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list: newList
    })
  }

  handleClick = () => {
    const newList = [...this.state.list]

    newList.push({
      id: newList.length + 1,
      text: this.state.text
    })

    this.setState({
      list: newList,
      text: ''
    })
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
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => this.checkChange(index)}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
                style={{ textDecoration: item.isChecked ? 'line-through' : '' }}
              ></span>
              <button onClick={() => this.handleDel(index)}>delete</button>
            </li>
          ))}
        </ul>

        {this.state.list.length === 0 && <div>暂无数据</div>}
      </div>
    )
  }
}
